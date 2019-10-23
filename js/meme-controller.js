'use strict';
let gCanvas = document.querySelector('.main-canvas');
let gCtx = gCanvas.getContext('2d');
let gCurrMeme = getCurrMeme();

function initCanvas() {
    let image = new Image();
    image.src = `./images/meme-images/${gCurrMeme.selectedImgId}.jpg`;

    image.onload = () => {
        gCanvas.width = image.width;
        gCanvas.height = image.height;
        renderImage(image);
    }
}

function onChangeImage(val) {
    let imageId = val.dataset.id;
    doChangeImage(imageId);
}

function renderImage(image) {
    gCtx.drawImage(image, 0, 0);
    gCtx.font = gCurrMeme.txts[0].size + 'px impact';
    gCtx.fillStyle = '#fff';
    gCtx.strokeStyle = '#000';
    gCtx.fillText(gCurrMeme.txts[0].line, 10, 50);
    gCtx.strokeText(gCurrMeme.txts[0].line, 10, 50);
    gCtx.fill();
    gCtx.stroke();
}

function onChangeText(newTxt) {
    doChangeText(newTxt);
}