'use strict';
let gCanvas = document.querySelector('.main-canvas');
let gCtx = gCanvas.getContext('2d');

function initCanvas() {
    let currMeme = getCurrMeme();
    let image = new Image();
    image.src = `./images/meme-images/${currMeme.selectedImgId}.jpg`;
    let currMemeTxt = currMeme.txts[currMeme.selectedTxtIdx].line;
    document.querySelector('#text').value = currMemeTxt;
    image.onload = () => {
        gCanvas.width = image.width;
        gCanvas.height = image.height;
        renderImage(image, currMeme);
    }
}

function onManipulateText(val) {
    let type = val.dataset.type;
    doManipulateText(type);
}

function onManipulateLines() {
    let val = document.querySelector('#text').value;
    doManipulateLines(val);
}

function onChangeImage(val) {
    let imageId = val.dataset.id;
    doChangeImage(imageId);
}

function renderImage(image, currMeme) {
    // let selectedTxtIdx = currMeme.selectedTxtIdx;

    gCtx.drawImage(image, 0, 0);
    currMeme.txts.forEach((item, idx) => {
        let pos = item.pos;

        gCtx.font = item.size + 'px impact';
        gCtx.fillStyle = '#fff';
        gCtx.strokeStyle = '#000';
        if (!idx) {
            gCtx.fillText(item.line, 10, pos);
            gCtx.strokeText(item.line, 10, pos);
        }
        if (idx) {
            gCtx.fillText(item.line, 10, gCanvas.height - item.size / 2);
            gCtx.strokeText(item.line, 10, gCanvas.height - item.size / 2);
        }
        gCtx.fill();
        gCtx.stroke();
    })
}

function onChangeText(newTxt) {
    doChangeText(newTxt);
}