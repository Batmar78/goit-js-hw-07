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

    if (currentItem.nodeName !== 'IMG') {
    return
    };
   
    const instance = basicLightbox.create(`
	<img src="${currentItem.dataset.source}" alt="${currentItem.description}" />`, {
        onShow: (instance) => {
            document.addEventListener('keydown', onKeyDown);
        
        
        },
        onClose: (instance) => { 
            document.removeEventListener('keydown', onKeyDown);
           
        },
    });

    function onKeyDown(evt) {
          
            if (evt.code === 'Escape') {
               instance.close() 
            }
    };
    instance.show();
}




