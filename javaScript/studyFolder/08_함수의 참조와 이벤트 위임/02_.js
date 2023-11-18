
'use strict';

let nav = document.getElementById('nav');

/*
    < 이벤트 위임 >

- 동일 계층내 다중 요소에 대한 유사 이벤트 처리를 개별적으로 할당함으로써
  소비되는 메모리 낭비와 코드의 유지보수 및 확장성을 증대시키기 위해
  요소들에 대한 공통 조상에 핸들러를 할당(위임).
*/


/* 
    ※ 하기의 모든 상황은 li 를 클릭했을 때의 이벤트가 발생 시의 상황을 상정.
*/

/* 
    < target 속성을 이용한 활성 이벤트 객체의 참조 >

- nav 에 대한 target 속성을 이용함으로써 활성화된 이벤트 객체의 참조를 반환.
  nav 를 포함한 모든 자손요소가 클릭 시 반응함으로써 상기의 상황에는 부적합.
*/
nav.addEventListener('click', function(e){
    e.target.style.backgroundColor = 'yellow'
});


/* 
    < 활성화된 이벤트 객체의 요소 확인 >

- 실제 이벤트가 발생되는 객체가 대상 요소가 맞는지 체크함으로써 스타일을 지정.
  하지만 해당 구조에서는 li 가 h3 와 a 를 자손 요소로 둘러싸고 있는 상황에서
  li 를 클릭했을 때 내부의 h3 나 a 에 이벤트가 걸림으로써 li 에 대한 이벤트
  처리는 불가. ( 단, h3 와 a 가 포함되지 않는 머리글 부분은 제외 )
*/
// nav.addEventListener('click', function(e){
//     const eventOj = e.target;

//     if( eventOj.tagName === 'LI' ){
//         eventOj.style.backgroundColor = 'yellow'
//     }
// });


/* 
    < 포함된 자식 요소의 이벤트 발생 감지를 통한 요소 추출 >

- 포함 구조에 의해 실제 이벤트 처리할 요소의 자식 요소에서 이벤트를 감지 시
  해당 이벤트 발생 자식 요소의 부모 요소를 점진적으로 쫓아 올라가 실제 이벤트
  대상 요소인지를 점검함으로써 간접적 이벤트 처리를 유도.
  단, 이때 실제 이벤트 처리 요소(li)를 포함하는 이벤트 위임 조상 핸들러에
  이벤트 발생 시 상기 이벤트 처리 유도 로직으로 인하여 계속 조상 요소를 쫓아
  올라가는 상황 발생 가능. 이에 따라 엉뚱한 상위의 다른 요소(li)에 이벤트가
  유도되거나 또는 점검 대상 요소(li)가 상위에 존재하지 않음으로써 계속 조상
  요소를 쫓아 올라가 최종 html 문서까지 올라가게 되고 다시 html 문서의 부모
  요소를 참조함으로써 null 이 할당되는 상황 발생 가능.
  따라서 null 에 대한 tagName 속성을 반환하려는 과정에서 에러가 발생될 수
  있으므로 이에 대한 방어 코드는 반드시 지정해야 함에 유의.
*/
// nav.addEventListener('click', function(e){
//     let eventOj = e.target;

//     while(eventOj.tagName !== 'LI'){
//         eventOj = eventOj.parentNode;

//         /*
//             ※ li 의 상위 요소이면서 이벤트 위임 대상이되는 조상의 영역을
//                계층적으로 올라가면서 검사를 진행하되 그 적용 범위를 벗어나는
//                지점에서의 이벤트 발생 시의 방어 코드.
//                단, 하기 방어 코드는 nav 의 상위 요소에 다른 li 가 존재하는
//                경우에는 해당 상위 li 에 이벤트가 유도됨으로써 적용 불가.
//         */
//         // if (eventOj.tagName === 'BODY') return;

//         /*
//             ※ contains 메서드를 통해 상위 부모 요소가 위임 조상 핸들러에
//                포함되는 여부를 측정함으로써 모든 예외 상황에 대응.
//         */
//         // if (!nav.contains(eventOj)) return;
//     }

//     eventOj.style.backgroundColor = 'yellow';
// });


/* 
    < closest >                                                                         - closest(클로짓) : 가장 가까운

- 인수로 지정된 선택자 요소를 자신을 포함한 인접 상위 요소 트리로 점진적으로
  점프하면서 검색하여 일치하면 해당 요소를 반환.
  일치하는 요소가 없으면 null 을 반환.

형식    :    elem.closest( selector )
*/
nav.addEventListener('click', function(e){
    const eventOj = e.target.closest('li');
    
    if (this.contains(eventOj)) {
        eventOj.style.backgroundColor = 'yellow';
    }
});