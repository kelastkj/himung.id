const { revealObserver } = window.HimungShell;

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 55}ms`);
  revealObserver.observe(element);
});
