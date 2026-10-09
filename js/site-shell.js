(function () {
  document.documentElement.classList.add("js");

  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("[data-menu]");

  const closeMenu = () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    menu?.classList.remove("is-open");
  };

  menuToggle?.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menu?.classList.toggle("is-open", !expanded);
  });

  menu?.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (menu && menuToggle && !menu.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const header = document.querySelector(".site-header");
  const backToTop = document.querySelector("[data-back-to-top]");
  let ticking = false;

  const updateChrome = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 18);
    backToTop?.classList.toggle("is-visible", window.scrollY > 650);
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (ticking) return;
    window.requestAnimationFrame(updateChrome);
    ticking = true;
  }, { passive: true });
  updateChrome();

  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -6%" });

  window.HimungShell = { closeMenu, revealObserver };
})();
