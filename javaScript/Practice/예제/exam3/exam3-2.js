'use strict';

/* 
    모듈 적용은 js 파일을 기준으로 경로 적용을 해야하며,
      실행 테스트는 브라우저에서만 적용 테스트 가능.
    즉, 라이브 서버나 깃호스팅 서버에서만 작동되며 디폴트
    브라우저와 같은 로컬 브라우저에서는 실행 불가.
*/
import executable from "./executable.js";

const page_container = document.querySelector('.page_container'),
    pageFrame = page_container.querySelector('.pageFrame'),
    img = pageFrame.getElementsByClassName('img'),
    btn = page_container.getElementsByClassName('btn');

const DELAYTIME = 750,
    confirmActionable = executable(DELAYTIME);

/* 
    < 파일 이미지 경로 설정시 주의 사항 >

- script 태그에 의한 js 코드가 html 에 포함되므로 경로 설정 시 기준은 js 파일이
  아닌, html 파일을 기준으로 설정되어야 함에 주의.
*/
const img_ar = [
    './image/bg1.jpg',
    './image/bg2.jpg',
    './image/bg3.jpg',
    './image/bg4.jpg',
];

let pageIdx = 0;                        // 현재 페이지 인덱스.

/* ============================================================================== */
// 배열을 이용한 이미지 백그라운드 초기화.

for (let i = 0; i < img.length; i++) {
    img[i].style.background = `url(${img_ar[i]}) center/100% 100%`;
}

/* ============================================================================== */

function downBtn() {
    if (confirmActionable()) {
        if (pageIdx < img.length - 1) {
            pageFrame.style.top = `${++pageIdx * -100}%`;
        }
    }
}

function upBtn() {
    if (confirmActionable()) {
        if (pageIdx > 0) {
            pageFrame.style.top = `${[--pageIdx * -100]}%`;
        }
    }
}

/* ============================================================================== */

/* down */
btn[1].addEventListener('click', downBtn);

/* up */
btn[0].addEventListener('click', upBtn);

/* wheel */
window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        downBtn();
    } else {
        upBtn();
    }
});