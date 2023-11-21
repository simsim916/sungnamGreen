'use strict';

/* 
    < 버튼과 오토슬라이드 간 동작 차이 >

- 버튼은 종료 위치에서 더 이상 이동이 불가하지만 오토스라이드의 경우 종료 위치
  에서 최초 슬라이드가 미리 우측에 배치되어 있어야 슬라이딩 효과가 가능.


    < 버튼과 페이저 간 동작 차이 >

- 페이저는 슬라이드간 건너뛰어 실행이 가능해야 하므로 미리 클릭하고자 하는
  페이저가 해당 진행 방향에 배치되어 있어야함.
  이에 따라 페이저의 실행에 따라 슬라이드들이 좌우 순서없이 배치되는 특성을
  고려하여 버튼 또한 클릭하는 방향의 슬라이드가 미리 배치되어 있어야 함.

------------------------------------------------------------------------------------

    < 동작 원리 및 개념 >

- 페이저의 건너 뛰어 슬라이딩이 가능한 동작 특성을 버튼과 오토슬라이드에
  공통적으로 적용키 위해 실제 슬라이딩 동작을 미세하게 지연시키고 그 이전에
  먼저 예비 동작을 위한 요소를 먼저 얘니메이션 기능을 제거한 상태에서 배치하고
  실제 동작 시에만 애니메이션 기능을 추가함으로써 자연스러운 슬라이딩 효과를
  노리고 버튼과 페이저 및 오토슬라이드를 페이저의 특성에 맞추어 실제 동작
  코드를 통합.
*/

import executable from './executable.js';                   // 실행가능 여부 측정 클로저 함수 임포트.

const main_container = document.querySelector('.main_container'),
    slides = main_container.querySelectorAll('.slide_list li'),
    btn = main_container.querySelectorAll('.main_container>a'),
    pager = main_container.querySelector('.pager');                               // 페이저 컨테이너.

for (let i = 0; i < slides.length; i++) {
    pager.innerHTML += `<a href="#" data-direction=${i}></a>`;
}

const pagers = pager.querySelectorAll('.pager a');                      // 페이저.
let currentIdx = 0;          // 현재 슬라이드 인덱스.

const DELAYTIME = 800,                          // 트랜지션을 통한 애니메이션 지속 시간.
    confirmActionable = executable(DELAYTIME);  // 실행가능 여부 측정함수. 외부 모듈을 통한 클로저(Closure) 함수 적용.

// ==================================================================================
/* 
    - 버튼 히든 설정 및 미설정 함수
    - 페이저 하이라이트 함수
    - 페이저에 대한 예비 동작전 예비 동작의 실행 여부 측정 함수
    - 실제 이미지 슬라이딩 동작 함수
*/

// < 버튼 히든 설정 및 미설정 함수 >
function checkStartEnd(idx) {
    btn[0].classList.remove('nonVisible');
    btn[1].classList.remove('nonVisible');
    if (idx <= 0) {
        btn[0].classList.add('nonVisible');
    } else if (idx >= slides.length - 1) {
        btn[1].classList.add('nonVisible');
    }
}

// < 페이저 하이라이트 함수 >
function highlightPager(nextIdx) {
    pagers[currentIdx].style.background = 'darkgray';
    pagers[nextIdx].style.background = 'rgb(49, 47, 47)';
}

// < 버튼과 페이저 동작전 슬라이드 예비 동작 처리 함수 >
function executePreparationActive(nextIdx, directionMove) {    // nextIde : 예비동작 슬라이드의 인덱스.  
    const nextEle = slides[nextIdx];                    // directionMove : 예비동작 슬라이드의 위치값.( 1 : 100%, -1 : -100% )

    nextEle.classList.remove('animated');
    nextEle.style.left = `${directionMove * 100}%`;
}

// < 페이저에 대한 예비 동작전 예비 동작의 실행 여부 측정 함수 >
function confirmPreparationActive(extractDirection) {
    if (currentIdx !== extractDirection) {    // 현재 선택되어 있는 요소와 호버한 요소의 인덱스가 동일하면 무시.
        executePreparationActive(
            extractDirection,                       // 예비동작 슬라이드의 차인덱스.
            extractDirection > currentIdx ? 1 : -1   // 예비동작 슬라이드의 위치값.( 1 : 100%, -1 : -100% )
        );
    }
}

// < 실제 이미지 슬라이딩 동작 함수 >
function activeSlide(nextIdx, directionMove) {          // nextIde : 실제동작 차슬라이드의 인덱스.
    const currentEle = slides[currentIdx],               // directionMove : 실제동작 당슬라이드의 위치값.( 1 : -100%, -1 : 100% )
        nextEle = slides[nextIdx];

    currentEle.classList.add('animated');
    currentEle.style.left = `${-directionMove * 100}%`; // 예비동작을 한 슬라이드와 당 슬라이드의 진행 방향 위치는
    //                                                  // 반대가 되어야 하므로 음수 적용에 주의.
    nextEle.classList.add('animated');
    nextEle.style.left = 0;

    highlightPager(nextIdx);
    checkStartEnd(nextIdx);

    currentIdx = nextIdx;
}

// ==================================================================================

/* 
    < 버튼과 페이저에 대한 클릭 이벤트 처리 >

- 예비동작을 위한 요소는 애니메이션 기능을 제거함으로써 동작시의 이동 과정이 보이지
  않도록 처리하고 실제 동작하는 요소에만 애니메이션 기능을 추가함으로써 동작시의
  이동 과정이 보이도록 설정.
*/
main_container.addEventListener('click', function (e) {
    const eventTarget = e.target.closest('a')

    if (this.contains(eventTarget) && confirmActionable()) {
        e.preventDefault();

        const extractDirection = +eventTarget.dataset.direction;
        let nextIdx = currentIdx + extractDirection;        // 버튼인 경우의 실제 동작 차인덱스.

        if (eventTarget.children[0]) {                            // 패이저가 아닌 버튼인 경우에만 하위 이미지 태그 요소가
            executePreparationActive(nextIdx, extractDirection);  // 존재하므로 버튼을 클릭했을 경우의 슬라이드 예비 동작 처리.
        } else {
            confirmPreparationActive(extractDirection);
            nextIdx = extractDirection;     // 페이저인 경우의 실제 동작 차인덱스.
        }

        /* 
            버튼에 대한 슬라이드 이동전 다음 슬라이드의 슬라이딩 효과 적용을 위한
            예비동작 처리 함수(executePreparationActive)에서의 포지션 옵셋 left 적용과
            activeSlide 함수 에서의 옵셋 left 적용이 중첩되어 애니메이션 효과를
            볼 수 없으므로, 이를 위한 시간적 단차 적용.
        */
        setTimeout(() => {
            activeSlide(nextIdx, nextIdx > currentIdx ? 1 : -1);
        }, 10);
    }
});

// ==================================================================================
/*
    < slide_list 에 마우스 오버/아웃 했을 때의 동작 처리 >
*/

const slide_list = main_container.querySelector('.slide_list');
let autoSlide;

slide_list.addEventListener('mouseenter', () => {
    autoSlide = setInterval(() => {
        if (confirmActionable()) {
            let nextIdx = (currentIdx + 1) % slides.length;

            executePreparationActive(nextIdx, 1)

            setTimeout(() => {
                activeSlide(nextIdx, 1);
            }, 10);
        }
    }, DELAYTIME);
});

slide_list.addEventListener('mouseleave', () => {
    clearInterval(autoSlide);
});