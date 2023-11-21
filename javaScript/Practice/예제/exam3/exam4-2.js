'use strict';

import executable from './executable.js';                               // 실행가능 여부 측정 클로저 함수 임포트.

const main_container = document.querySelector('.main_container'),       // 이벤트 처리를 위한 주컨테이너.
    slide_lists = main_container.getElementsByTagName('li'),            // 슬라이딩을 위한 슬라이드 리스트 배열.
    btn = main_container.querySelectorAll('.main_container>a'),         // back, foward 버튼의 참조.
    pager = main_container.querySelector('.pager');                     // 페이저들의 생성을 위한 주컨테이너.

/* 페이저 생성 */
for (let i = 0; i < slide_lists.length; i++) {
    pager.innerHTML += `<a href="#" data-direction = ${i}></a>`;        // 데이터 프로퍼티를 이용하여 페이저의 인덱스 값을 관리.
}

const pagers = pager.getElementsByTagName('a');

const DELAYTIME = 800,                               // 트랜지션을 통한 애니메이션 지속 시간.           
    confirmActionable = executable(DELAYTIME);       // 실행가능 여부 측정함수. 외부 모듈을 통한 클로저(Closure) 함수 적용.

let currentIdx = 0,                     // 당 슬라이드 인덱스.
    nextIdx = 0,                        // 차 슬라이드 인덱스.
    direction;                          // 차 슬라이드의 예비 동작 방향. ( 1 : 100%,   -1 : -100% )

// ===========================================================================

/* < 버튼 히든 설정 및 미설정 함수 > */
function checkBtnView() {
    btn[0].classList.remove('nonVisible');
    btn[1].classList.remove('nonVisible');

    if (nextIdx <= 0) {
        btn[0].classList.add('nonVisible');
    } else if (nextIdx >= slide_lists.length - 1) {
        btn[1].classList.add('nonVisible');
    }
}

/* < 페이저 하이라이트 함수 > */
function highlightPager() {
    pagers[currentIdx].style.backgroundColor = 'darkgray';
    pagers[nextIdx].style.backgroundColor = 'rgb(49, 47, 47)';
}

/* < 버튼과 페이저, 오토슬라이드 동작전 차 슬라이드 예비 동작 처리 함수 > */
function preparationActive() {      
    slide_lists[nextIdx].classList.remove('animated');
    slide_lists[nextIdx].style.left = `${direction * 100}%`;
}

/* < 실제 이미지 슬라이딩 동작 함수 > */
function activeSlide() {
    setTimeout(() => {

        slide_lists[currentIdx].classList.add('animated');
        slide_lists[currentIdx].style.left = `${-direction * 100}%`;   // 예비동작을 위한 차슬라이드의 진행 방향과 당 슬라이드의
        //                                                             // 진행 방향은 반대가 되어야 하므로 음수 적용에 주의.
        slide_lists[nextIdx].classList.add('animated');
        slide_lists[nextIdx].style.left = 0;

        checkBtnView();
        highlightPager();

        currentIdx = nextIdx;
    }, 30);

}

// ===========================================================================

/* 버튼과 페이저 이벤트 처리 */
main_container.addEventListener('click', function (e) {
    const eventEle = e.target.closest('a');

    if (this.contains(eventEle) && confirmActionable()) {
        e.preventDefault();

        const extractDirection = +eventEle.dataset.direction;

        nextIdx = currentIdx + extractDirection;                        // 버튼인 경우의 실제 동작 차인덱스.

        if (eventEle.children[0]) {                 // 버튼과 페이저를 구분하기 위한 목적코드.
            //                                      // 버튼인 경우에만 하위 이미지 태그 요소가 존재.

            direction = extractDirection;           // 버튼인 경우 데이터 프러퍼티로 얻은 값이 예비 동작 방향.
        } else {
            nextIdx = extractDirection;                             // 페이저인 경위의 실제 동작 차인덱스.

            direction = extractDirection > currentIdx ? 1 : -1;     // 페이저인 경우 당 인덱스를 기준으로 데이터
            //                                                      // 프러퍼티로 얻은 값을 비교하여 예비 동작 방향 결정.
        }

        if (currentIdx != nextIdx) {   // 페이저의 경우 동일 페이저를 다시 클릭하는 경우 다시 실행될
            //                         // 필요가 없음. 하지만 그렇다고 필요가 없지 않는 이유는 예비 동작의
            //                         // 실행으로 당인덱스 위치의 슬라이드가 예비 동작으로 인한 바깥 영역으로
            //                         // 이동되어 빈 이미지가 보이게 되는 현상이 발생되므로 차단. 
            preparationActive();
        } else {
            return;
        }

        activeSlide();
    }
});

// ===========================================================================

/* 오토 슬라이드 이벤트 처리 */
const slide_list = main_container.querySelector('.slide_list');
let autoSlide;

slide_list.addEventListener('mouseenter', () => {
    autoSlide = setInterval(() => {
        if (confirmActionable()) {      // 버튼이나 페이저를 실행한 후에도 호버시 오토슬라이드는 바로 실행되어야
            //                          // 하므로 당행과 같이 실행 여부 측정을 setInterval 내 로직을 적용함으로써
            //                          // 일정 시간(DELAYTIME)이 경과함으로써 confirmActionable 이 무조건 바로
            //                          // 실행되도록 적용. 이를 setInterval 외부에서 평가하게 되면  버튼이나
            //                          // 페이저를 실행한 후 바로 실행이 불가한데, 이 경우 동작 또한 인터벌 시간을
            //                          // 추가로 더 지정해야만 정상 작동.
            //                                       // 이에 대한 원인은 차후 확인 요망. DELAYTIME 을 추가로 지정하지 않으면
            //                          // DELAYTIME 지정에도 지연 시간이 적용되지 않음.
            nextIdx = (currentIdx + 1) % slide_lists.length;
            direction = 1;

            preparationActive();
            activeSlide();
        }
    }, DELAYTIME);
});

slide_list.addEventListener('mouseleave', () => {
    clearInterval(autoSlide);
});