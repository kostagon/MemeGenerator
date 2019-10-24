'use strict';
let gNumOfImgs = 25;

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