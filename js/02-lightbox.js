import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const picturesMarcup = createGalleryItems(galleryItems);

galleryList.insertAdjacentHTML("beforeend", picturesMarcup);
galleryList.addEventListener("click", picturesClick);

function createGalleryItems(galleryItems) {
  return galleryItems.map(({ preview, original, description }) =>
  ` <li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li> `
    )
    .join("");
    
}
createGalleryItems(galleryItems);


function picturesClick(evt) {
    evt.preventDefault();
if(evt.target === evt.currentTarget){
    return;
};
new SimpleLightbox 
    ('.gallery a', {
        captionsData: 'alt', 
        captionPosition: 'bottom', 
        captionDelay: 250
    }
);
};

