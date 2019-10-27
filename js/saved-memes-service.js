'use strict';

function getMemes() {
    let res = JSON.parse(localStorage.getItem('saved-memes'));
    return res;    
}