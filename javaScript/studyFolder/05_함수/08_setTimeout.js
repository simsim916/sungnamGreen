'use strict'

/* 
    < setTimeout >

- 지정된 시간(timeout) 이후에 handler 에 전달된 함수나 전달된 코드를 실행.

형식   :    function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number

            - handler : 실행할 함수의 참조나 코드.
            - timeout : handler 가 실행되기까지의 delay 시간을 1000분의 1초 단위로 지정.
            - arguments : handler 가 함수인 경우 handler 함수에 전달할 추가 인수.
            - number : 개별 타이머를 식별할 정수 형태의 고유 ID 값을 반환.
*/
setTimeout(() => document.write('setTimeout 함수' + '<br>'), 4000);

/* 
    < 반복문 적용시 유의사항 >

- 아래 코드는 1초 마다 i 값이 출력되는 것을 의도한 코드이나, 실제 실행 시 1초 마다 i 값이 출력되는
  것이 아닌 1초 뒤에 한꺼번에 출력되는 것을 확인 가능.
  이는 딜레이에 대한 실행 주체에 대한 오해에 기인한 것으로 딜레이 시간 경과후 setTimeout 함수가
  호출되는 것이 아닌 handler 함수가 실행되는 것으로써, 루프 내에서 순식간에 setTimeout 함수가 이미
  모두 호출된 상태에서 동일한 딜레이 시간 경과후 setTimeout 함수에 지정된 handler 함수가 실행됨에
  따라 거의 동시에 출력되는 결과.
*/
for (let i = 0; i < 3; i++) {
    setTimeout(
        () => document.write(`${i + "<br>"}`),
        1000
    );
}

/* 
  handler 함수에 대한 개별 독립적인 딜레이 시간을 지정함으로써
  1초 마다 i 값이 출력되는 것을 확인 가능.
*/
for (let i = 5; i < 8; i++) {
    setTimeout(
        () => document.write(`${i + "<br>"}`),
        1000 * i
    );
}

let timeout1, timeout2, timeout3;

for (let i = 10; i < 13; i++) {
    switch (i) {
        case 10:
            timeout1 = setTimeout(
                () => document.write(`${i + "<br>"}`), 1000 * i
            );
            break;

        case 11:
            timeout2 = setTimeout(
                () => document.write(`${i + "<br>"}`), 1000 * i
                );
                clearTimeout(timeout2);

            /* 
                < clearTimeout >

            - setTimeout 함수에 의해 반환된 고유 ID 값을 clearTimeout 함수의 인수로 지정함으로써
              setTimeout 함수에 지정된 handler 이벤트 자체를 취소.
            */

            break;

        case 12:
            timeout3 = setTimeout(
                () => document.write(`${i + "<br>"}`), 1000 * i
            );
            break;
    }
}