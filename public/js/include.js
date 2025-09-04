document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");

  includes.forEach(async (el) => {
    const file = el.getAttribute("data-include");

    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Failed to fetch ${file}`);
      el.innerHTML = await response.text();
    } catch (err) {
      el.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
      console.error(err);
    }
  });
});
