'use strict';

const header = document.querySelector('header'),
      menu = header.getElementsByTagName('a'),
      contents = header.querySelector('.contents'),
      main = document.querySelector('main');

let beforeSelected = menu[0];     // 직전 선택 메뉴.

/* 
    직전 메뉴에 해당하는 컨텐트를 안보이도록 하고 현재
    선택된 메뉴를 보이도록 설정하는 함수.
    getElementById 는 document 에만 적용 가능함에 주의.
*/
function setMenuContent(self) {
    contents.querySelector(beforeSelected.getAttribute('href')).style.display = 'none';
    contents.querySelector(self.getAttribute('href')).style.display = 'block';
}

/* 
    header 의 높이만큼 main 에 대한 marginTop 을 지정하기 위한 함수.
*/
function setMainMarginTop() {

    /* 
        < offsetWidth, offsetHeight >

    - 마진을 제외한 해당 요소의 너비와 높이 값을 반환.
      header 에 보더나 스크롤바가 포함되지 않으므로 clientHeight 적용 가능.
    */
    main.style.marginTop = header.offsetHeight + 'px';
}

setMenuContent(beforeSelected);
setMainMarginTop();

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function () {
        beforeSelected.classList.remove('selected');
        this.classList.add('selected');

        setMenuContent(this);
        setMainMarginTop();

        beforeSelected = this;
    });
}

/* 
    < resize 이벤트 >

- 브라우저 창의 크기 변화나 화면 확대/축소에 따른 document view 의 크기가 변경될 때 발생되는 이벤트.
*/
window.addEventListener('resize', setMainMarginTop);