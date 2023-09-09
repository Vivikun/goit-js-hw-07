import { galleryItems } from "./gallery-items.js";
//Change code below this line

const gallery = document.querySelector(".gallery");
const galleryImageList = galleryItems
  .map((image) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" data-source="${image.original}" />
      </a>
    </div>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryImageList);

gallery.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery__image")) {
    event.preventDefault();
    const imageUrl = event.target.getAttribute("data-source");
    const description = event.target.alt;

    const img = new Image();
    img.src = imageUrl;
    img.alt = description;

    const lightbox = basicLightbox.create(
      `<div class="lightbox-content"></div>`
    );
    lightbox.element().querySelector(".lightbox-content").appendChild(img);
    lightbox.show();
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        lightbox.close();
      }
    });
  }
});
