const { products, icons } = window.HimungCatalog;
const { revealObserver } = window.HimungShell;
const productGrid = document.querySelector("[data-products]");
const productBase = document.body.dataset.productBase || "aplikasi";

if (productGrid) {
  productGrid.innerHTML = products.map((product, index) => `
    <article class="product-card reveal" style="--product-color:${product.color};--product-accent:${product.accent}">
      <div class="product-visual"><div class="product-icon">${icons[product.icon]}</div><div><h3>${product.name}</h3><p><strong>${product.subtitle}</strong></p></div></div>
      <div class="product-meta"><span class="badge">${product.category}</span><span class="product-availability"><i aria-hidden="true"></i>${product.availability}</span></div>
      <p>${product.description}</p>
      <a class="card-link" href="${productBase}/${product.slug}/" data-product-index="${index}" aria-label="Lihat akses dan detail produk ${product.name}">Lihat Akses &amp; Detail &rarr;</a>
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
    <a class="dialog-page-link" href="${productBase}/${product.slug}/">Lihat Halaman Produk <span aria-hidden="true">&rarr;</span></a>
    ${product.links.map((link) => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} <span aria-hidden="true">&nearr;</span></a>`).join("")}
  `;
  productDialog.showModal();
  document.body.classList.add("dialog-open");
};

productGrid?.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-product-index]");
  if (trigger) {
    event.preventDefault();
    openProductDialog(Number(trigger.dataset.productIndex), trigger);
  }
});

const closeProductDialog = () => productDialog?.close();

dialogClose?.addEventListener("click", closeProductDialog);
productDialog?.addEventListener("click", (event) => { if (event.target === productDialog) closeProductDialog(); });
productDialog?.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  lastDialogTrigger?.focus();
});

document.querySelectorAll(".product-grid, .audience-grid").forEach((group) => {
  group.querySelectorAll(".reveal").forEach((element, index) => element.style.setProperty("--reveal-delay", `${index * 85}ms`));
});
document.querySelectorAll(".hero-grid .reveal").forEach((element, index) => element.style.setProperty("--reveal-delay", `${index * 130}ms`));
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
