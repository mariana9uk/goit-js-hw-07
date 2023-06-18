import { galleryItems } from './gallery-items.js';
// Change code below this line
const markup = createMarkup(galleryItems);
const galleryElem = document.querySelector(".gallery");
 galleryElem.insertAdjacentHTML('beforeend', markup.join("")); 

function createMarkup(images) {return images.map(
    ({ preview, original, description }) => {
      return  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
})
};

var lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:"250", captionPosition:"bottom", enableKeyboard:"true", docClose:"true", doubleTapZoom:"2" });
    
console.log(galleryItems);
