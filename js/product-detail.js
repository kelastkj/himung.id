const { products, icons } = window.HimungCatalog;
const { revealObserver } = window.HimungShell;
const slug = document.body.dataset.product;
const productIndex = products.findIndex((item) => item.slug === slug);
const product = products[productIndex];

if (!product) {
  window.location.replace("../");
} else {
  document.documentElement.style.setProperty("--product-color", product.color);
  document.documentElement.style.setProperty("--product-accent", product.accent);

  document.querySelector("[data-detail-icon]").innerHTML = icons[product.icon];
  document.querySelector("[data-detail-category]").textContent = product.category;
  document.querySelectorAll("[data-detail-title]").forEach((element) => {
    element.textContent = product.name;
  });
  document.querySelector("[data-detail-subtitle]").textContent = product.subtitle;
  document.querySelector("[data-detail-summary]").textContent = product.summary;
  document.querySelector("[data-detail-description]").textContent = product.description;
  document.querySelector("[data-detail-platforms]").innerHTML = `<span class="detail-availability">&#10003; ${product.availability}</span>${product.platforms.map((platform) => `<span>${platform}</span>`).join("")}`;
  document.querySelector("[data-detail-actions]").innerHTML = product.links.map((link) => `<a class="detail-primary-action" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} <span aria-hidden="true">&nearr;</span></a>`).join("");

  const quickFeatures = product.featureGroups.flatMap((group) => group.items).slice(0, 4);
  document.querySelector("[data-detail-quick]").innerHTML = quickFeatures.map((feature) => `<li>${feature}</li>`).join("");

  document.querySelector("[data-detail-toc]").innerHTML = product.featureGroups.map((group, index) => `<a href="#fitur-${index + 1}"><span>${String(index + 1).padStart(2, "0")}</span>${group.title}</a>`).join("");
  document.querySelector("[data-detail-feature-groups]").innerHTML = product.featureGroups.map((group, index) => `
    <section class="detail-feature-group reveal" id="fitur-${index + 1}">
      <div class="detail-feature-heading"><span>${String(index + 1).padStart(2, "0")}</span><h2>${group.title}</h2></div>
      <ul>${group.items.map((feature) => `<li>${feature}</li>`).join("")}</ul>
    </section>
  `).join("");

  const gallerySection = document.querySelector("[data-gallery-section]");
  if (product.screenshots.length) {
    gallerySection.hidden = false;
    const gallery = document.querySelector("[data-gallery]");
    const galleryHeading = gallerySection.querySelector(".detail-section-heading");
    galleryHeading.classList.add("gallery-heading");
    galleryHeading.insertAdjacentHTML("beforeend", `
      <div class="gallery-tools">
        <span>${product.screenshots.length} tampilan nyata</span>
        <div class="gallery-controls" aria-label="Navigasi galeri">
          <button type="button" data-gallery-prev aria-label="Tampilan sebelumnya" title="Tampilan sebelumnya">&larr;</button>
          <button type="button" data-gallery-next aria-label="Tampilan berikutnya" title="Tampilan berikutnya">&rarr;</button>
        </div>
      </div>
    `);
    gallery.innerHTML = product.screenshots.map((screenshot, index) => `
      <figure class="screenshot-card">
        <button class="screenshot-open" type="button" data-screenshot-index="${index}" aria-label="Buka ${screenshot.title} dalam ukuran penuh">
          <span class="screenshot-frame"><img src="../../${screenshot.src}" alt="${screenshot.alt}" width="720" height="1600" loading="lazy" /></span>
          <span class="screenshot-zoom" aria-hidden="true">&#x2922;</span>
        </button>
        <figcaption><span>${screenshot.tag}</span><strong>${screenshot.title}</strong><p>${screenshot.caption}</p></figcaption>
      </figure>
    `).join("");

    const scrollGallery = (direction) => gallery.scrollBy({ left: direction * gallery.clientWidth * 0.78, behavior: "smooth" });
    galleryHeading.querySelector("[data-gallery-prev]").addEventListener("click", () => scrollGallery(-1));
    galleryHeading.querySelector("[data-gallery-next]").addEventListener("click", () => scrollGallery(1));

    const dialog = document.createElement("dialog");
    dialog.className = "screenshot-dialog";
    dialog.innerHTML = `
      <div class="screenshot-dialog-panel">
        <div class="screenshot-dialog-bar">
          <div><span data-dialog-tag></span><strong data-dialog-title></strong></div>
          <button type="button" data-dialog-close aria-label="Tutup gambar" title="Tutup">&times;</button>
        </div>
        <div class="screenshot-dialog-stage">
          <button type="button" data-dialog-prev aria-label="Gambar sebelumnya" title="Gambar sebelumnya">&larr;</button>
          <img data-dialog-image alt="" />
          <button type="button" data-dialog-next aria-label="Gambar berikutnya" title="Gambar berikutnya">&rarr;</button>
        </div>
        <p data-dialog-caption></p>
      </div>
    `;
    document.body.appendChild(dialog);
    let activeScreenshot = 0;

    const showScreenshot = (index) => {
      activeScreenshot = (index + product.screenshots.length) % product.screenshots.length;
      const screenshot = product.screenshots[activeScreenshot];
      dialog.querySelector("[data-dialog-image]").src = `../../${screenshot.full || screenshot.src}`;
      dialog.querySelector("[data-dialog-image]").alt = screenshot.alt;
      dialog.querySelector("[data-dialog-tag]").textContent = screenshot.tag;
      dialog.querySelector("[data-dialog-title]").textContent = screenshot.title;
      dialog.querySelector("[data-dialog-caption]").textContent = screenshot.caption;
    };
    gallery.querySelectorAll("[data-screenshot-index]").forEach((button) => {
      button.addEventListener("click", () => {
        showScreenshot(Number(button.dataset.screenshotIndex));
        dialog.showModal();
      });
    });
    dialog.querySelector("[data-dialog-close]").addEventListener("click", () => dialog.close());
    dialog.querySelector("[data-dialog-prev]").addEventListener("click", () => showScreenshot(activeScreenshot - 1));
    dialog.querySelector("[data-dialog-next]").addEventListener("click", () => showScreenshot(activeScreenshot + 1));
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") showScreenshot(activeScreenshot - 1);
      if (event.key === "ArrowRight") showScreenshot(activeScreenshot + 1);
    });
  }

  const videoSection = document.querySelector("[data-video-section]");
  if (videoSection && product.videos?.length) {
    videoSection.hidden = false;
    const videoWrap = document.querySelector("[data-videos]");
    const videoHeading = videoSection.querySelector(".detail-section-heading");
    videoHeading.classList.add("gallery-heading");
    videoHeading.insertAdjacentHTML("beforeend", `
      <div class="gallery-tools">
        <span>${product.videos.length} video</span>
        <div class="gallery-controls" aria-label="Navigasi video">
          <button type="button" data-video-prev aria-label="Video sebelumnya" title="Video sebelumnya">&larr;</button>
          <button type="button" data-video-next aria-label="Video berikutnya" title="Video berikutnya">&rarr;</button>
        </div>
      </div>
    `);
    videoWrap.innerHTML = product.videos.map((video, index) => `
      <figure class="video-card">
        <button class="video-open" type="button" data-video-index="${index}" aria-label="Putar video ${video.title}">
          <span class="video-frame">
            <img src="../../${video.poster}" alt="${video.alt}" width="720" height="1280" loading="lazy" />
            <span class="video-play" aria-hidden="true"></span>
            <span class="video-badge">${video.duration}</span>
          </span>
        </button>
        <figcaption><span>${video.tag}</span><strong>${video.title}</strong><p>${video.caption}</p></figcaption>
      </figure>
    `).join("");

    const scrollVideos = (direction) => videoWrap.scrollBy({ left: direction * videoWrap.clientWidth * 0.78, behavior: "smooth" });
    videoHeading.querySelector("[data-video-prev]").addEventListener("click", () => scrollVideos(-1));
    videoHeading.querySelector("[data-video-next]").addEventListener("click", () => scrollVideos(1));

    const videoDialog = document.createElement("dialog");
    videoDialog.className = "screenshot-dialog video-dialog";
    videoDialog.innerHTML = `
      <div class="screenshot-dialog-panel">
        <div class="screenshot-dialog-bar">
          <div><span data-dialog-tag></span><strong data-dialog-title></strong></div>
          <button type="button" data-dialog-close aria-label="Tutup video" title="Tutup">&times;</button>
        </div>
        <div class="screenshot-dialog-stage">
          <button type="button" data-dialog-prev aria-label="Video sebelumnya" title="Video sebelumnya">&larr;</button>
          <video data-dialog-video controls playsinline preload="metadata"></video>
          <button type="button" data-dialog-next aria-label="Video berikutnya" title="Video berikutnya">&rarr;</button>
        </div>
        <p data-dialog-caption></p>
      </div>
    `;
    document.body.appendChild(videoDialog);
    let activeVideo = 0;

    const showVideo = (index) => {
      activeVideo = (index + product.videos.length) % product.videos.length;
      const video = product.videos[activeVideo];
      const element = videoDialog.querySelector("[data-dialog-video]");
      element.src = `../../${video.src}`;
      element.poster = `../../${video.poster}`;
      videoDialog.querySelector("[data-dialog-tag]").textContent = video.tag;
      videoDialog.querySelector("[data-dialog-title]").textContent = video.title;
      videoDialog.querySelector("[data-dialog-caption]").textContent = video.caption;
      element.play().catch(() => {});
    };

    videoWrap.querySelectorAll("[data-video-index]").forEach((button) => {
      button.addEventListener("click", () => {
        showVideo(Number(button.dataset.videoIndex));
        videoDialog.showModal();
      });
    });
    videoDialog.querySelector("[data-dialog-close]").addEventListener("click", () => videoDialog.close());
    videoDialog.querySelector("[data-dialog-prev]").addEventListener("click", () => showVideo(activeVideo - 1));
    videoDialog.querySelector("[data-dialog-next]").addEventListener("click", () => showVideo(activeVideo + 1));
    videoDialog.addEventListener("click", (event) => {
      if (event.target === videoDialog) videoDialog.close();
    });
    videoDialog.addEventListener("keydown", (event) => {
      if (event.target.closest("video")) return;
      if (event.key === "ArrowLeft") showVideo(activeVideo - 1);
      if (event.key === "ArrowRight") showVideo(activeVideo + 1);
    });
    videoDialog.addEventListener("close", () => {
      const element = videoDialog.querySelector("[data-dialog-video]");
      element.pause();
      element.removeAttribute("src");
      element.load();
    });
  }

  const previous = products[productIndex - 1];
  const next = products[productIndex + 1];
  const productNavigation = document.querySelector("[data-product-navigation]");
  productNavigation.innerHTML = `
    ${previous ? `<a class="previous-product" href="../${previous.slug}/"><span>Sebelumnya</span><strong>&larr; ${previous.name}</strong></a>` : "<span></span>"}
    ${next ? `<a class="next-product" href="../${next.slug}/"><span>Berikutnya</span><strong>${next.name} &rarr;</strong></a>` : "<span></span>"}
  `;

  const contactLink = document.querySelector("[data-product-contact]");
  contactLink.href = `mailto:wibowo@himung.id?subject=${encodeURIComponent(`Tentang ${product.name} di HIMUNG.ID`)}`;

  document.querySelectorAll(".reveal").forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index, 4) * 55}ms`);
    revealObserver.observe(element);
  });
}
