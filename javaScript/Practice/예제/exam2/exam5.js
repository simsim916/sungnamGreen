'use strict';

let header = document.querySelector('header'),
    menu = header.querySelectorAll('a'),
    contents = header.querySelector('.contents'),
    main = document.querySelector('main');

let beforeSelected = menu[0],     // 직전 선택 메뉴.
    beforeContent = contents.children[0];    // 직전 선택 컨텐트

function setMenuContent(self) {
    beforeContent.style.display = 'none';

    let currentContent = contents.querySelector(self.getAttribute('href'));
    currentContent.style.display = 'block';

    beforeContent = currentContent;
}

setMenuContent(beforeSelected);

header.addEventListener('click', function (e) {
    const eventOj = e.target;

    if (eventOj.tagName === 'A') {
        beforeSelected.classList.remove('selected');
        eventOj.classList.add('selected');
        setMenuContent(eventOj);
        beforeSelected = eventOj;

        /* 
            sticky 적용시 버튼을 클릭할 때마다 a 태그가 contents 에 target 이
            걸리는 기본 이벤트 특성으로 인해 스크롤되어 스크롤이 계속 내려가는
            것을 확인 가능.
            이를 방지하기 위해 스크롤을 다시 최상단으로 올리는 작업이 필요하지만,
            이를 바로 적용시켜도 이벤트 동작보다 CSS(sticky)가 항상 나중에 적용되는
            특성으로 인해 이를 역전시키기 위한 최상단 스크롤 이동에 대한 딜레이
            실행 필요.
            단, 이렇게 처리하여도 하강 스크롤 이후 다시 최상단으로 스크롤이 찰나
            이동하는 동작으로 인한 main 에 대한 들뜸 현상 문제는 해결되지 않음.
        */
        setTimeout(function () {
            window.scroll(0, 0);
        }, .1);
    }
});