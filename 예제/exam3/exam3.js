'use strict';

const page_container = document.querySelector('.page_container'),
    pageFrame = page_container.querySelector('.pageFrame'),
    img = pageFrame.getElementsByClassName('img'),
    btn = page_container.getElementsByClassName('btn');

const DELAYTIME = 750;

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

let pageIdx = 0,                        // 현재 페이지 인덱스.
    startTime = -new Date();

/* ============================================================================== */
// 배열을 이용한 이미지 백그라운드 초기화.

for (let i = 0; i < img.length; i++) {
    img[i].style.background = `url(${img_ar[i]}) center/100% 100%`;
}

/* ============================================================================== */

/*
    버튼이나 마우스휠을 연속적으로 조작했을 때 pageFrame 에 대한 즉각적인 동작을
    방지하기 위해, 직전 top 의 트래지션이 작동하는 시간이 경과한 이후에만 동작이
    가능하도록 직전 동작시간 측정을 통한 실행 여부 확인을 위한 메서드 정의.

    또한, 트랜지션이 지연되어 동작 과정이 아직 끝나지 않았음에도 연속 트리거 현상이
    발생되는 것을 방어하기 위해 DELAYTIME 에 방어 시간 추가.
*/
function executable() {
    if (new Date() - startTime > DELAYTIME + 100) {
        startTime = new Date();

        return true;
    }
}

function downBtn() {
    if (executable()) {
        if (pageIdx < img.length - 1) {
            pageFrame.style.top = `${++pageIdx * -100}%`;
        }
    }
}

function upBtn() {
    if (executable()) {
        if (pageIdx > 0) {
            pageFrame.style.top = `${[--pageIdx * -100]}%`;
        }
    }
}

/* 
    < deltaY >

- wheel 이벤트에 종속되는 이벤트 객체로써 세로 스크롤 양을 정수값 형태로 반환.
  wheel 다운은 양수값을 wheel 업은 음수값을 반환. 크롬 기준 1 회 이벤트 발생 시마다
  각각 100, -100 을 반환하나 브라우저 별로 값의 크기는 상이함에 주의.
*/

/* ============================================================================== */

/* down */
btn[1].addEventListener('click', downBtn);

/* up */
btn[0].addEventListener('click', upBtn);

/* 
    < wheel 이벤트 > - 구버전 이벤트 : mousewheel( 현재는 사용되지 않음 )

- 마우스 휠을 조작했을 때의 이벤트.
  이벤트의 대상은 일반적으로 window 나 document 가 대상이 되며 스클롤이 생성되는
  다른 요소가 될 수도 있음.

-----------------------------------------------------------------------------------------

    < deltaY >

- wheel 이벤트에 종속되는 이벤트 객체로써 세로 스크롤 양을 정수값 형태로 반환.
  wheel 다운은 양수값을 wheel 업은 음수값을 반환. 크롬 기준 1 회 이벤트 발생 시마다
  각각 100, -100 을 반환하나 브라우저 별로 값의 크기는 상이함에 주의.
*/
window.addEventListener('wheel', (e)=> {
    if (e.deltaY > 0) {
        downBtn();
    } else {
        upBtn();
    }
});