import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const bodyEl = document.querySelector('body');
// let modalImage;


const galleryMarkup = galleryItems.map(
({ preview, original, description }) => 
	`<div class="gallery__item">
<a class="gallery__link" href="${original}">
   <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
   />
</a>
</div>
	`,)
.join('');

console.log(galleryMarkup);
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);


