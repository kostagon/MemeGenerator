'use strict';

function openMobileNav() {
    document.querySelector('.header-nav-mobile').style.display = 'inline';
    document.body.addEventListener('click', ()=>{
        document.querySelector('.header-nav-mobile').style.display = 'none';
    }, true)
}