'use strict'

/* 
    < setInterval >

- 지정된 시간(timeout)을 간격으로 반복적으로 handler 에 전달된 함수나 전달된 코드를 실행.
  지정된 시간을 기준으로 반복적으로 handler 가 실행되는 것 외에는 setTimeout 함수와 사용
  방법과 형식이 동일.

*/
let id = setInterval(() => {
    document.write(`123<br>`);
}, 2000);

/* 
  < clearInterval >

- setInterval 함수에 의해 반환된 고유 ID 값을 clearInterval 함수의 인수로 지정함으로써
  setInterval 함수에 지정된 handler 이벤트 자체를 취소.
*/
setTimeout(() => clearInterval(id), 10000);