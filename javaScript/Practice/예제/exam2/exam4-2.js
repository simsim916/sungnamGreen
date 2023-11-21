'use strict';

const header = document.querySelector('header'),
    menu = header.getElementsByTagName('a'),
    contents = header.querySelector('.contents'),
    main = document.querySelector('main');

let beforeSelected = menu[0],     // 직전 선택 메뉴.
    beforeContent = contents.children[0];    // 직전 선택 컨텐트

function setMenuContent(self) {
    beforeContent.style.display = 'none';

    /* 
        현재 선택된 메뉴의 컨텐츠는 검색을 해야 하지만, 이전 선택 메뉴의 컨텐츠는
        이미 검색을 한 상태이므로 재검색을 회피하기 위해 검색후 변수를 할당하여 
        저장함으로써 검색을 최소화.
    */
    let currentContent = contents.querySelector(self.getAttribute('href'));
    currentContent.style.display = 'block';

    beforeContent = currentContent;
}

function setMainMarginTop() {
    main.style.marginTop = header.offsetHeight + 'px';
}

setMenuContent(beforeSelected);
setMainMarginTop();

header.addEventListener('click', function (e) {
    const eventOj = e.target;

    if (eventOj.tagName === 'A') {
        beforeSelected.classList.remove('selected');
        eventOj.classList.add('selected');

        setMenuContent(eventOj);
        setMainMarginTop();

        beforeSelected = eventOj;
    }
});

window.addEventListener('resize', setMainMarginTop);