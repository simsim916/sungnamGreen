'use strict';

const slide_list = document.querySelector('.slide_list');

const imgArray = [
    './image/bg1.jpg',
    './image/bg2.jpg',
    './image/bg3.jpg',
    './image/bg4.jpg',
    './image/bg5.jpg',
];

for (let i = 0; i < imgArray.length; i++) {
    slide_list.innerHTML += '<li></li>';
}

// ==================================================================================

const imgList = slide_list.getElementsByTagName('li');

for (let i = 0; i < imgArray.length; i++) {
    imgList[i].style.background = `url(${imgArray[i]}) center/100% 100%`;
}

imgList[0].classList.add('inImg');

// ==================================================================================

let i = 0;

setInterval(() => {
    imgList[i].classList.remove('inImg');

    if (i >= imgArray.length - 1) i = -1;
    i++;

    imgList[i].classList.add('inImg');
}, 1500);