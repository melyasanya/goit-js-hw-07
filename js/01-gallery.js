import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const makeGallery = (item) => {
  const listItem = document.createElement("li");
  list.classList.add("gallery__item");
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.setAttribute("href", `${item.original}`);
  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.setAttribute("src", `${item.preview}`);
  image.setAttribute("data-source", `${item.original}`);
  image.setAttribute("alt", `${item.description}`);
  link.append(image);
  listItem.append(link);
  link.addEventListener("click", () => {
    link.removeAttribute("href");
  });

  listItem.addEventListener("click", () => {
    const instance = basicLightbox.create(`
<img src="${image.dataset.source}">
`);
    instance.show();
  });
  return listItem;
};

const gallery = galleryItems.map(makeGallery);

list.append(...gallery);
