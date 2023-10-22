// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const listImg = document.querySelector('.gallery');
const imgMarkup = createImgList(galleryItems);
listImg.insertAdjacentHTML('beforeend', imgMarkup);

function createImgList(images) {
  return images
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join('');
  listImg.innerHTML = imgMarkup;
}

const instance = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
