import './index.css'

window.addEventListener("DOMContentLoaded", () => {
  const page = document.getElementById("page");

  requestAnimationFrame(() => {
    page.classList.remove("opacity-0", "translate-y-6");
    page.classList.add("opacity-100", "translate-y-0");
  });
});
