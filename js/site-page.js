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
  if (event.target instanceof HTMLAnchorElement) closeMenu();
});

document.addEventListener("click", (event) => {
  if (menu && menuToggle && !menu.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => header?.classList.toggle("is-scrolled", window.scrollY > 18), { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -6%" });

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 55}ms`);
  revealObserver.observe(element);
});
