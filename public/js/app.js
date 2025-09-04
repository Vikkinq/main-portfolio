// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((el) => {
  el.addEventListener("click", (e) => {
    const target = document.querySelector(el.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
