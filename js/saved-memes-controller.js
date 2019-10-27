'use strict';
let gSelectedMemeId;

function renderMemes() {
    let galleryBox = document.querySelector('.image-gallery');
    let memes = getMemes();
    if (!memes) {
        return document.querySelector('.no-memes-yet').innerHTML = `
        <h2>Sorry memelord, Im afraid you're out of memes</h2>
        <img src="./images/default-meme/default.jpg" class="gallery-item"/>`
    }
    let length = memes.length;
    let strHtml = '';
    for (var i = 0; i < length; i++) {
        strHtml += `<img src="${memes[i].url}" data-id="${memes[i].id}" class="gallery-item" onclick="openModal(this)" alt="" srcset="">`
    }
    galleryBox.innerHTML = strHtml;
}

function openModal(el) {
    let elModal = document.querySelector('.modal');
    elModal.classList.toggle('visibility-hidden');
    if (!elModal.classList.contains('visibility-hidden')) {
        gSelectedMemeId = el.dataset.id;
    } else gSelectedMemeId = null;
}