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

const filterButtons = [...document.querySelectorAll("[data-lab-filter]")];
const experiments = [...document.querySelectorAll("[data-lab-category]")];
const filterResult = document.querySelector("[data-lab-filter-result]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.labFilter;
    let visible = 0;

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    experiments.forEach((experiment) => {
      const matches = filter === "all" || experiment.dataset.labCategory === filter;
      experiment.hidden = !matches;
      if (matches) visible += 1;
    });

    if (filterResult) filterResult.textContent = `${visible} eksperimen ditampilkan`;
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -6%" });

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 55}ms`);
  revealObserver.observe(element);
});
