const { revealObserver } = window.HimungShell;

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

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 55}ms`);
  revealObserver.observe(element);
});
