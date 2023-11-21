// 'use strict';

// function loadScript(src) {
//     /* 동적 script 요소 생성 */
//     let script = document.createElement('script');

//     /* 
//         동적으로 생성된 script 요소에 대한 src 프로퍼티에
//         매개변수로부터 전달된 경로 설정.
//     */
//     script.src = src;

//     /* 
//         동적으로 생성된 script 요소를 문서에 추가.
//     */
//     document.head.append(script);
// }

// loadScript('./javascript/01_01.js');

// /* 
//     < test is not defined >

// - loadScript 함수 내에서 script1 를 생성한다하여도 script1 요소가
//   비동기적으로 로드가 완료되는 시점을 예측할 수가 없고, 그 이전에.
//   아래의 test 함수 호출이 먼저 동기적으로 실행되므로 test 함수가
//   정의되지 않았다는 에러 발생.
//   즉, loadScript 함수 호출이 끝난 다음 test 함수가 호출이 된다
//   하더라도, script1 의 로드는 바로 진행이 되지만 로드가 완전히 
//   종료되어야만 script1 내의 함수 호출이 가능한데, test 함수의
//   동기적 실행이 예측 불가한 script1 로드 완료 시점보다 앞서므로
//   test 함수를 인식하지 못하는 문제점 발생.
// */
// test();

/////////////////////////////////////////////////////////////////////////////

'use strict';

function loadScript(src, callback) {
    let script = document.createElement('script');

    script.src = src;
    document.head.append(script);
    
    script.onload = () => callback();
}

/* 
    < 콜백을 이용한 연쇄적 비동기 로드시의 순서 제어 >

- script1 이 로드가 완료된 이후에 script2 를 순차적으로 로드하기
  위해서 아래와 같이 콜백을 위해 정의한 익명객체 내에서 다시
  loadScript 함수를 호출함으로써, script1 이 로드가 완료되어야만
  콜백함수 내에서 test 함수 호출 이후에 다시 loadScript 함수를
  재호출하게 되므로 이후 script2 가 로드 완료되면 다시 내부의
  콜백 함수가 실행되어 비동기 로직에 대한 순서 제어가 가능함을
  확인 가능.
*/
loadScript('./01_01.js', () => {
    test();

    loadScript('./01_02.js', () => {
        test();
    });
});