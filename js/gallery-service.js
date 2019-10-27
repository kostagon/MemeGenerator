'use strict';
let gNumOfImgs = 25;
let gMemes = getMemes();

function saveCurrId(id) {
    localStorage.setItem('curr-img-id', id);
    redirectToEditor();
}

function redirectToEditor() {
    document.location = "meme-editor.html";
}

function getNumOfImages() {
    return gNumOfImgs;
}

function getMemes() {
    let res = [];
    for(var i = 1; i <= gNumOfImgs; i++) {
        res.push({
            id: i,
            src: `images/meme-images/${i}.jpg`,
            keywords: 'blah'
        })
    }
    return res;
}