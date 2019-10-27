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
        setBottomTxtHeight(gCanvas.height);
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
    gCtx.drawImage(image, 0, 0);
    currMeme.txts.forEach((item) => {
        gCtx.font = item.size + 'pt Impact, Anton, Arimo';
        gCtx.fillStyle = '#fff';
        gCtx.strokeStyle = '#000';
        gCtx.textAlign = 'center';
        if (gCtx.measureText(item.line).width > gCanvas.width) {
            document.querySelector('#text').disabled = true;
        };
        document.querySelector('#text').disabled = false;

        gCtx.fillText(item.line, gCanvas.width / 2, item.pos);
        gCtx.strokeText(item.line, gCanvas.width / 2, item.pos);


        gCtx.fill();
        gCtx.stroke();
    })
}

function onChangeText(newTxt) {
    doChangeText(newTxt);
}

function onSaveMemeUrl() {
    let currMeme = getCurrMeme();
    let memeUrl = {
        id: currMeme.selectedImgId,
        url: gCanvas.toDataURL('image/jpeg')
    };
    doSaveMeme(memeUrl);
};


function downloadImg(elLink) {
    let imgContent = gCanvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}