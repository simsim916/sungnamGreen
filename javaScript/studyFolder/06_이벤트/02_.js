'use strict'

/* 
    < getElementsByTagName >

- DOM 문서를 순차적으로 검색하여 지정된 태그 요소들을 배열 형태로 반환.

형식    :    document.getElementsByTagName( 문자열 형태의 태그명 )

==========================================================================

    < getElementsByClassName >

- DOM 문서를 순차적으로 검색하여 지정된 클래스 요소들을 배열 형태로 반환.

형식    :    document.getElementsByClassName( 문자열 형태의 클래스명 )

==========================================================================

    < getElementById >

- DOM 문서를 순차적으로 검색하여 지정된 ID 요소를 반환.

형식    :    document.getElementById( 문자열 형태의 ID명 )

==========================================================================

    < querySelector >

- DOM 문서를 순차적으로 검색하여 지정된 선택자 형식에 매칭되는 첫 번째
  요소를 반환. 가상 클래스 선택자 형식은 가능하나 가상 요소 선택자 형식은
  지원되지 않음에 주의.

형식    :    document.querySelector( 문자열 형태의 선택자 형식 )

==========================================================================

    < querySelectorAll >

- DOM 문서를 순차적으로 검색하여 지정된 선택자 형식에 매칭되는 모든 요소를
  배열 형태로 반환.

형식    :    document.querySelectorAll( 문자열 형태의 선택자 형식 )

==========================================================================

※ querySelector 메서드는 getElement ~ 메서드에 비해 좀 더 세밀한 요소
   선택이 가능한 반면 상대적으로 검색 속도가 느린 단점.

*/
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByClassName('menu'));
console.log(document.getElementById('nav'));
console.log(document.querySelector('#nav .cafe'));
console.log(document.querySelectorAll('p'));