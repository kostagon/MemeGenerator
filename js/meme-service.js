'use strict';
let gCurrId = localStorage.getItem('curr-img-id');
let gMeme = {
    selectedImgId: gCurrId,
    selectedTxtIdx: 0,
    txts: [{
            line: 'Top Text',
            size: 50,
            align: 'left',
            color: 'red',
            pos: 50
        },
        {
            line: 'Bottom Text',
            size: 50,
            align: 'left',
            color: 'red',
            pos: 450
        }
    ],
}

function doManipulateText(val) {
    if (val === 'increase') gMeme.txts[gMeme.selectedTxtIdx].size++;
    else if (val === 'decrease') gMeme.txts[gMeme.selectedTxtIdx].size--;
    else if (val === 'move-up') gMeme.txts[gMeme.selectedTxtIdx].pos--;
    else if (val === 'move-down') gMeme.txts[gMeme.selectedTxtIdx].pos++;
    initCanvas();
}

function doManipulateLines(newVal) {
    gMeme.txts[gMeme.selectedTxtIdx].line = newVal;
    if (!gMeme.selectedTxtIdx) {
        gMeme.selectedTxtIdx = 1
    } else {
        gMeme.selectedTxtIdx = 0;
    }
    initCanvas();
}

function doChangeImage(imageId) {
    gMeme.selectedImgId = imageId;
    initCanvas();
}

function doChangeText(newTxt) {
    gMeme.txts[gMeme.selectedTxtIdx].line = newTxt;
    initCanvas();
}

function getCurrMeme() {
    if (!gCurrId) document.location = "index.html";
    else return gMeme;
}