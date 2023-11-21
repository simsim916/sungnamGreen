'use strict';

const header = document.querySelector('header'),
      menu = header.getElementsByTagName('a'),
      contents = header.querySelector('.contents'),
      main = document.querySelector('main');

let beforeSelected = menu[0];     // 직전 선택 메뉴.

function setMenuContent(self) {
    contents.querySelector(beforeSelected.getAttribute('href')).style.display = 'none';
    contents.querySelector(self.getAttribute('href')).style.display = 'block';
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