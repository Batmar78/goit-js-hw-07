import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`
).join('');

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', onClick)

function onClick(evt) {
    
    evt.preventDefault();
    let currentItem = evt.target;
   
    const instance = basicLightbox.create(`
	<img src="${currentItem.dataset.source}" alt="${currentItem.description}" />
`);
    instance.show();

    const visible = basicLightbox.visible()
    const elem = instance.element()

    if(visible){
        
        document.addEventListener('keydown', onKeyDown);

        function onKeyDown(evt) {
            console.log(evt.code);
            if (evt.code === 'Escape') {
               instance.close() 
            }
        }
    }  
}




