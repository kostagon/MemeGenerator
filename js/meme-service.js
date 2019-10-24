'use strict';

let gCurrId = localStorage.getItem('curr-img-id');
let gIsHeightSet = false;
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
    if (val === 'move-up') {
        if (gMeme.txts[gMeme.selectedTxtIdx].pos - gMeme.txts[gMeme.selectedTxtIdx].size >= 0) gMeme.txts[gMeme.selectedTxtIdx].pos -= 6;
        else return;
    }
    if (val === 'move-down') {
        if (gMeme.txts[gMeme.selectedTxtIdx].pos <= gCanvas.height - 5) gMeme.txts[gMeme.selectedTxtIdx].pos += 6;
        else return;
    }
    // gMeme.txts[gMeme.selectedTxtIdx].pos += 6;
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

function setBottomTxtHeight(val) {
    if (gIsHeightSet) return;
    else gMeme.txts[1].pos = gCanvas.height - gMeme.txts[1].size / 2;
    gIsHeightSet = true;
}