import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const galleryContainer = document.querySelector(".gallery");
// let currentLightbox = null;
// // Funkcja do generowania znaczników obrazów z galerii
// function renderGallery() {
//   galleryItems.forEach((item) => {
//     const link = document.createElement("a");
//     link.href = item.original;

//     const img = document.createElement("img");
//     img.src = item.preview;
//     img.alt = item.description;
//     img.classList.add("gallery-item");
//     img.dataset.source = item.original;
//     img.addEventListener("click", (event) =>
//       openModal(event, item.original, item.description)
//     );

//     link.appendChild(img);
//     galleryContainer.appendChild(link);
//   });
// }
// function openModal(event, imageUrl, description) {
//   event.preventDefault();
//   if (currentLightbox) {
//     currentLightbox.element().querySelector("img").src = imageUrl;
//   } else {
//     currentLightbox = basicLightbox.create(`
//       <img src="${imageUrl}" alt="${description}">
//     `);
//     currentLightbox.show();
//     document.addEventListener("keydown", handleKeyPress);
//   }
// }

// function handleKeyPress(event) {
//   if (currentLightbox) {
//     if (event.key === "Escape") {
//       currentLightbox.close();
//       currentLightbox = null;
//     }
//   }
// }

// renderGallery();
// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
let currentLightbox = null;

// Funkcja do generowania znaczników obrazów z galerii
function renderGallery() {
  galleryItems.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.original;

    const img = document.createElement("img");
    img.src = item.preview;
    img.alt = item.description;
    img.classList.add("gallery-item");
    img.dataset.source = item.original;

    // Zablokowanie domyślnego zachowania linka
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });

    link.appendChild(img);
    galleryContainer.appendChild(link);
  });

  // Delegacja zdarzeń do otwierania lightboxa
  galleryContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("gallery-item")) {
      const imageUrl = event.target.dataset.source;
      const description = event.target.alt;
      openModal(imageUrl, description);
    }
  });
}

function openModal(imageUrl, description) {
  if (currentLightbox) {
    const lightboxContent = currentLightbox.element().querySelector("img");
    lightboxContent.src = imageUrl;
  } else {
    const lightboxContent = document.createElement("img");
    lightboxContent.src = imageUrl;
    lightboxContent.alt = description;

    currentLightbox = basicLightbox.create(lightboxContent);
    currentLightbox.show();
    document.addEventListener("keydown", handleKeyPress);
  }
}

function handleKeyPress(event) {
  if (currentLightbox && event.key === "Escape") {
    currentLightbox.close();
    currentLightbox = null;
  }
}

renderGallery();
