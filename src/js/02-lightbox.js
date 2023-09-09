import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryHTML = galleryItems
  .map((image) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" data-source="${image.original}" />
      </a>
    </li>`;
  })
  .join("");

gallery.innerHTML = galleryHTML;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "outside",
  captionDelay: 250,
  nav: false,
  close: false,
  showCounter: false,
});

//   const lightbox = new SimpleLightbox(".gallery a", {
//     captionsData: "alt",
//     captionPosition: "outside",
//     captionDelay: 250,
//     nav: false,
//     close: false,
//     showCounter: false,
//   });

//   gallery.addEventListener("click", (event) => {
//     if (event.target.tagName === "IMG") {
//       event.preventDefault();
//       lightbox.open();
//     }
//   });
console.log(galleryItems);
