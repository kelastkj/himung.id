const path = require("path");
const { chromium } = require("playwright");

async function run() {
  const baseUrl = process.env.SMOKE_BASE_URL || "http://127.0.0.1:4173";
  const launchOptions = { headless: true };
  if (process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH) {
    launchOptions.executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;
  }
  const browser = await chromium.launch(launchOptions);
  const viewports = [
    { name: "mobile", width: 390, height: 844 },
    { name: "desktop", width: 1440, height: 1000 },
  ];
  const results = [];

  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    const errors = [];

    page.on("console", (message) => {
      if (message.type() === "error") {
        errors.push(message.text());
      }
    });
    page.on("pageerror", (error) => errors.push(error.message));

    const response = await page.goto(baseUrl, {
      waitUntil: "networkidle",
    });
    const imageCount = await page.locator("img").count();
    for (let index = 0; index < imageCount; index += 1) {
      await page.locator("img").nth(index).evaluate((element) => {
        element.scrollIntoView({ block: "center", inline: "center" });
      });
      await page.waitForTimeout(120);
    }
    const revealCount = await page.locator(".reveal").count();
    for (let index = 0; index < revealCount; index += 1) {
      await page.locator(".reveal").nth(index).evaluate((element) => {
        element.scrollIntoView({ block: "center", inline: "nearest" });
      });
      await page.waitForTimeout(90);
    }
    await page.waitForTimeout(750);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForLoadState("networkidle");

    const cards = await page.locator(".product-card").count();
    const h1 = await page.locator("h1").innerText();
    const images = await page.locator("img").evaluateAll((items) =>
      items.map((image) => ({
        src: image.getAttribute("src"),
        complete: image.complete,
        width: image.naturalWidth,
        height: image.naturalHeight,
        alt: image.getAttribute("alt"),
      }))
    );

    const result = {
      viewport: viewport.name,
      status: response.status(),
      cards,
      h1,
      errors,
      images,
    };

    if (viewport.name === "mobile") {
      await page.locator(".menu-toggle").click();
      result.menuOpen = await page
        .locator("[data-menu]")
        .evaluate((element) => element.classList.contains("is-open"));
      await page.locator(".menu-toggle").click();
    }

    await page.evaluate(() => {
      document.querySelectorAll(".product-grid, .audience-grid").forEach((element) => {
        element.scrollLeft = 0;
      });
      window.scrollTo(0, 0);
    });

    await page.screenshot({
      path: path.join(__dirname, "..", "assets", "images", `smoke-${viewport.name}.png`),
      fullPage: true,
    });
    results.push(result);
    await page.close();
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
