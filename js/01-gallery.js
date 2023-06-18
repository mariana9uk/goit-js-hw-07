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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
})
};

function imageLargeView(even) {
    even.preventDefault();
    if (even.target.classList.contains("gallery")) return;
        const source = even.target.dataset.source
        const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
`)

        instance.show()
    };
    
galleryElem.addEventListener('click', imageLargeView);

  
console.log(galleryItems);
