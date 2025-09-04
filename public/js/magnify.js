const overlay = document.getElementById("lightbox"); // <div id="lightbox" class="lightbox">
const bigImg = document.getElementById("lightbox-img"); // <img id="lightbox-img">

function openLightbox(src, alt = "") {
  bigImg.src = src;
  bigImg.alt = alt;
  overlay.classList.add("is-open"); // matches .lightbox.is-open in your CSS
  document.body.classList.add("lightbox-open"); // locks scroll
}

function closeLightbox() {
  overlay.classList.remove("is-open");
  document.body.classList.remove("lightbox-open");
  bigImg.removeAttribute("src");
}

// Open: click any <a data-lightbox> or <img data-lightbox>
document.addEventListener("click", (e) => {
  const a = e.target.closest("a[data-lightbox]");
  if (a) {
    e.preventDefault();
    const thumb = a.querySelector("img");
    openLightbox(a.getAttribute("href"), thumb?.alt || "");
  } else {
    const img = e.target.closest("img[data-lightbox]");
    if (img) {
      e.preventDefault();
      openLightbox(img.dataset.full || img.currentSrc || img.src, img.alt || "");
    }
  }
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay || e.target.closest(".lightbox__close")) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
