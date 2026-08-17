document.documentElement.classList.add("js");

const { products, icons } = window.HimungCatalog;
const productGrid = document.querySelector("[data-products]");

if (productGrid) {
  productGrid.innerHTML = products.map((product, index) => `
    <article class="product-card reveal" style="--product-color:${product.color};--product-accent:${product.accent}">
      <div class="product-visual"><div class="product-icon">${icons[product.icon]}</div><div><h3>${product.name}</h3><p><strong>${product.subtitle}</strong></p></div></div>
      <div class="product-meta"><span class="badge">${product.category}</span></div>
      <p>${product.description}</p>
      <button class="card-link" type="button" data-product-index="${index}" aria-label="Lihat pratinjau ${product.name}">Lihat Detail &rarr;</button>
    </article>
  `).join("");
}

const productDialog = document.querySelector("[data-product-dialog]");
const dialogClose = document.querySelector("[data-dialog-close]");
let lastDialogTrigger = null;

const renderFeatures = (product) => product.featureGroups.map((group) => `
  <section class="feature-group">
    <h3>${group.title}</h3>
    <ul class="feature-list">${group.items.map((feature) => `<li>${feature}</li>`).join("")}</ul>
  </section>
`).join("");

const openProductDialog = (index, trigger) => {
  const product = products[index];
  if (!product || !productDialog) return;
  lastDialogTrigger = trigger;
  productDialog.style.setProperty("--dialog-color", product.color);
  productDialog.querySelector("[data-dialog-icon]").innerHTML = icons[product.icon];
  productDialog.querySelector("[data-dialog-category]").textContent = product.category;
  productDialog.querySelector("[data-dialog-title]").textContent = product.name;
  productDialog.querySelector("[data-dialog-subtitle]").textContent = product.subtitle;
  productDialog.querySelector("[data-dialog-summary]").textContent = product.summary;
  productDialog.querySelector("[data-dialog-features]").innerHTML = renderFeatures(product);
  productDialog.querySelector("[data-dialog-actions]").innerHTML = `
    <a class="dialog-page-link" href="aplikasi/${product.slug}/">Lihat Halaman Produk <span aria-hidden="true">&rarr;</span></a>
    ${product.links.map((link) => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} <span aria-hidden="true">&nearr;</span></a>`).join("")}
  `;
  productDialog.showModal();
  document.body.classList.add("dialog-open");
};

productGrid?.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-product-index]");
  if (trigger) openProductDialog(Number(trigger.dataset.productIndex), trigger);
});

const closeProductDialog = () => {
  productDialog?.close();
  document.body.classList.remove("dialog-open");
  lastDialogTrigger?.focus();
};

dialogClose?.addEventListener("click", closeProductDialog);
productDialog?.addEventListener("click", (event) => { if (event.target === productDialog) closeProductDialog(); });
productDialog?.addEventListener("close", () => document.body.classList.remove("dialog-open"));

document.querySelectorAll(".product-grid, .audience-grid").forEach((group) => {
  group.querySelectorAll(".reveal").forEach((element, index) => element.style.setProperty("--reveal-delay", `${index * 85}ms`));
});
document.querySelectorAll(".hero-grid .reveal").forEach((element, index) => element.style.setProperty("--reveal-delay", `${index * 130}ms`));

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("[data-menu]");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("is-open", !expanded);
  });
  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    }
  });
  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menuToggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      menuToggle.focus();
    }
  });
}

const navLinks = [...document.querySelectorAll('.nav-menu a[href^="#"]:not(.nav-cta)')];
let navigationLockUntil = 0;
navLinks.forEach((link) => link.addEventListener("click", () => {
  navigationLockUntil = performance.now() + 1400;
  navLinks.forEach((item) => item.classList.remove("active"));
  link.classList.add("active");
}));

const sectionLinks = new Map(navLinks.map((link) => [link.getAttribute("href").slice(1), link]));
const trackedSections = [...sectionLinks.keys()].map((id) => document.getElementById(id)).filter((section) => section?.tagName === "SECTION").sort((a, b) => a.offsetTop - b.offsetTop);
const siteHeader = document.querySelector(".site-header");
let scrollTicking = false;

const updateActiveNav = () => {
  siteHeader?.classList.toggle("is-scrolled", window.scrollY > 18);
  if (performance.now() < navigationLockUntil) { scrollTicking = false; return; }
  const marker = window.scrollY + Math.min(220, window.innerHeight * 0.32);
  let current = trackedSections[0];
  trackedSections.forEach((section) => { if (section.offsetTop <= marker) current = section; });
  if (current) {
    navLinks.forEach((item) => item.classList.remove("active"));
    sectionLinks.get(current.id)?.classList.add("active");
  }
  scrollTicking = false;
};

window.addEventListener("scroll", () => {
  if (!scrollTicking) { window.requestAnimationFrame(updateActiveNav); scrollTicking = true; }
}, { passive: true });
window.addEventListener("resize", updateActiveNav);
updateActiveNav();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -7%" });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const logo = document.querySelector("[data-logo]");
const toast = document.querySelector("[data-toast]");
let logoClicks = 0;
let toastTimer;
if (logo && toast) {
  logo.addEventListener("click", () => {
    logoClicks += 1;
    if (logoClicks >= 5) {
      toast.classList.add("is-visible");
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
      logoClicks = 0;
    }
  });
}
