import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');


const galleryMarkup = galleryItems.map(
({ preview, original, description }, alt) => 
	`
	<li class="gallery__item">
		<a class="gallery__link" href="${original}">
		<img class="gallery__image" src="${preview}" alt="${description}" />
 </a>`,)
.join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

const lightShotGallery = new SimpleLightbox('.gallery a', { 
	caption: true,
	nav: true,
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
});

