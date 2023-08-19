import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector(".gallery");

const markup = galleryItems.map( item => `<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</li>`).join("");

galleryList.insertAdjacentHTML("beforeend", markup);

galleryList.addEventListener("click", onClick);


function onClick (evt) {
evt.preventDefault();
if(evt.target.nodeName !== "IMG") {
  return
};

const instance = basicLightbox.create(`
<img src="${evt.target.dataset.source}" width="800" height="600" />`, 
{
  onShow: () => {
    document.addEventListener("keydown", onEscKeyPress)
  },
  onClose: () => {
    document.removeEventListener("keydown", onEscKeyPress)
  }
}) 
instance.show();

function onEscKeyPress (evt) {
if(evt.code === "Escape") {
    instance.close();
}
}
}