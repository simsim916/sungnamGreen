'use strict'

/* 
    요소들을 변수에 저장함으로써 재사용성을 높이고 참조 위치를 미리
    저장함으로써 문서(Dom)에 대한 재검색률을 낮춤으로써 처리 속도 향상.
*/
let nav = document.getElementById('nav'),
    menu = document.getElementsByClassName('menu'),
    li = document.getElementsByTagName('li'),
    paragraph = document.querySelector('div>p'),
    paragraphAll = document.querySelectorAll('div p');

/* 
    getElementsByClassName, getElementsByTagName, querySelectorAll 은
    다중 요소 선택에 의한 배열 형식으로 반환되므로 반드시 배열 연산자를
    통한 접근을 해야함에 주의.

==========================================================================

    < CSS 스타일 지정 및 컨텐트 반환/지정 형식 >

형식    :   요소.style.CSS스타일속성명 = 문자열 형식의 value

형식    :   요소.value = 문자열 형식의 value

            -  input 태그와 같이 닫는 태그가 없어 value 속성 지정이 가능한
               태그에 대한 값 반환 및 지정.

형식    :   요소.textContent = 문자열 형식의 value

            - 태그 내의 텍스트 컨텐트를 반환 및 지정.

==========================================================================

    < innerHTML >

- textContent 는 해당 요소 내의 태그를 제외한 텍스트 형식의 컨텐트만 읽고
  변경이 가능한 반면, innerHTML 은 해당 컨텐트 영역 내의 텍스트 문자열
  뿐만아니라 태그도 읽고 변경이 가능.

*/
nav.style.backgroundColor = 'burlywood';
menu[2].style.fontSize = '30px';
li[1].style.listStyle = 'none';
paragraph.style.color = 'red';
paragraphAll[1].style.color = 'blue';

let inputTag = document.getElementsByTagName('input');
console.log(inputTag[0].value);
// if (inputTag[0].value == '다음') {
//     inputTag[0].value = 'Next';
// }

console.log(menu[1].textContent);
// if (menu[1].textContent == '카페') {
//     menu[1].textContent = 'Cafe';
// }

console.log(li[1].innerHTML);
// li[1].innerHTML = '<h3><a href="#" class="menu cafe">다락방</a></h3>';


/*
    < length >

- 배열의 크기를 반환하는 필드.
*/
// for (let i = 0; i < paragraphAll.length; i++) {
//     paragraphAll[i].style.opacity = '.3';
// }