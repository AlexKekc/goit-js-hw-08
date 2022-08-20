// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
console.log(galleryList);
const galleryMarkup = createGalleryMarkup(galleryItems);
console.log(galleryMarkup);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
       <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>
    `;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a');
gallery.options.captionsData = 'alt';
gallery.options.captionDelay = '250';
gallery.options.captionPosition = 'bottom';
