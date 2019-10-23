'use strict';

let gMeme = {
    selectedImgId: 1,
    selectedTxtIdx: 0,
    txts: [
        {
            line: '',
            size: 60,
            align: 'left',
            color: 'red'
        }
    ]
}
function doChangeImage(imageId) {
    gMeme.selectedImgId = imageId;
    initCanvas();
}

function doChangeText(newTxt) {
    gMeme.txts[0].line = newTxt;
    initCanvas();
}

function getCurrMeme() {
    return gMeme;
}