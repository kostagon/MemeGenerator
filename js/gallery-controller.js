'use strict';

function renderGallery() {
    let numOfImgs = getNumOfImages();
    let galleryBox = document.querySelector('.image-gallery');
    let strHtml = '';
    for(var i = 1; i <= numOfImgs; i++) {
        strHtml += `<img src="images/meme-images/${i}.jpg" data-id="${i}" class="gallery-item" onclick="onImageClick(this)" alt="" srcset="">`
    }
    galleryBox.innerHTML = strHtml;
}

function onImageClick(el) {
    let imgId = el.dataset.id;
    saveCurrId(imgId);
}