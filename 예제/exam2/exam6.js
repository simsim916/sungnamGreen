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

function scrollInit() {
  /* 
      버튼을 클릭했을 때는 a 태그의 preventDefault 로 별도의 delay 가
      필요없지만 새로고침(load) 시에는 scroll 메서드 실행 이후에
      CSS(sticky) 가 적용되는 문제점으로 setTimeout 활용.
  */
  setTimeout(function () {
    window.scroll(0, 0);
  }, 50);
}

setMenuContent(beforeSelected);

header.addEventListener('click', function (e) {
  e.preventDefault();                             // 클릭했을 때 a 태그의 기본 이벤트 특성으로 인한 contents 에
  //                                              // target 이 걸려 스크롤이 계속 내려가는 현상 발생.
  //                                              // 따라서 이를 막기 위한 기본 이벤트 속성 제거 필요.
  const eventOj = e.target;

  if (eventOj.tagName === 'A') {
    beforeSelected.classList.remove('selected');
    eventOj.classList.add('selected');
    setMenuContent(eventOj);
    beforeSelected = eventOj;
    scrollInit();
  }
});

window.addEventListener('load', scrollInit);