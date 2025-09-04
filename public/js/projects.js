(function () {
  const grid = document.getElementById("projectsGrid");
  const data = window.PROJECTS || [];
  if (!grid || !Array.isArray(data)) return;

  const esc = (s = "") =>
    String(s).replace(
      /[&<>"']/g,
      (m) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }[m])
    );

  const frag = document.createDocumentFragment();

  data.forEach((p) => {
    const article = document.createElement("article");
    article.className = "rounded-xl border border-white/10 bg-white/5 overflow-hidden h-full flex flex-col";

    const imgHTML = `
      <a data-lightbox href="${esc(p.image)}">
        <img src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}"
             class="w-full aspect-[4/3] sm:aspect-[16/9] object-cover" loading="lazy" />
      </a>`;

    const tagsHTML = (p.tags || [])
      .map((t) => `<span class="px-2 py-1 rounded-md border border-white/10 bg-white/5">${esc(t)}</span>`)
      .join("");

    article.innerHTML = `
      ${imgHTML}
      <div class="p-4 flex flex-col gap-2">
        <h3 class="font-semibold">${esc(p.title)}</h3>
        ${p.desc ? `<p class="text-sm text-white/80">${esc(p.desc)}</p>` : ""}
        ${tagsHTML ? `<div class="mt-1 flex flex-wrap gap-2 text-xs text-white/80">${tagsHTML}</div>` : ""}
      </div>
    `;

    frag.appendChild(article);
  });

  grid.appendChild(frag);
})();
