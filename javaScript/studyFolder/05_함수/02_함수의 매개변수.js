/*
    < Defalut parameters >

- 실인수가 형식인수 갯수보다 적은 경우, 남는 형식인수에 대한 undefined값 초기화를
  방지하기 위한 디폴트 파라미터 지정이 가능하여 실인수가 형식인수에 모두 대응되면
  디폴트 파라미터는 무시되지만, 실인수가 형식인수에 모두 대응되지 못하고 남는 형식
  인수의 경우에만 지정된 디폴트 값이 적용되어 초기화.
  또한 다른 언어와 같이 디폴트 파라미터의 지정을 우측부터 지정해야하는 문법적인
  제한은 없어 임의로 순서없이 디폴트 파라미터의 지정이 가능하지만 대응되지 않는
  매개변수에 대해서는 undefined 처리.

형식    :   function 함수명(para1, para2 = default_value) {
                실행블럭;
            }

-------------------------------------------------------------------------------------

    < Rest parameters >

- 자바 메서드의 가변인수 문법 형태와 동일하게 전달한 실인수들을 내부적으로 배열 형태로
  저장한후 가변 형식 인수의 참조를 통해 요소에 접근. 실인수의 타입이 달라도 무방.

형식    :   function 함수명(...args) {
                실행블럭;
            }

-------------------------------------------------------------------------------------

    < Local inner function >

- js에서는 함수의 객체적 특성에 따라 함수 내에 지역함수의 선언이 가능하며 일반 지역
  변수의 특성과 동일하게 주함수 내로 통용 범위가 제한.   또한, 호출 호이스팅 범위도
  주함수 내로 제한.

*/

'use strict';

function test1(n1, n2, n3 = 5) {
    return n1 + n2 + n3;
}
console.log(test1(1, 2, 3));
console.log(test1(1, 2));   // 실인수가 형식인수에 모두 대응되면 디폴트 파라미터의 초기식은 무시되지만, 실인수가
console.log();              // 형식인수에 모두 대응되지 못하여 남는 형식인수의 경우에만 디폴트 초기값 적용.


function test2(str1, str2, str3 = str1 + str2) {    // 디포트 초기식의 디폴트 값을 앞서 지정된 파라미터 값을
    return str1 + str2 + str3;                        // 이용해 지정 가능.
}
console.log(test2('Welcome ', 'to house ', 'PSY'));
console.log(test2('Welcome ', 'to house '));
console.log();


function concateString(...str) {            // Rest parameters : 전달한 실인수들을 배열 형태로 받아 참조를 반환.
    let strCombine = '';

    for (let i = 0; i < str.length; i++) {
        strCombine += str[i];
    }

    return strCombine;
}
console.log(concateString('I ', 'am ', 'a boy!!'));
console.log();


function concateData(...data) {             // 실인수의 타입이 달라도 무방.
    let dataCombine = '';

    for (let i = 0; i < data.length; i++) {
        dataCombine += data[i];
    }

    return dataCombine;
}
console.log(concateData('age : ', 25));
console.log();


function printName(name) {

    function print() {            // 로컬 이너 함수 : 함수(외부 함수) 내부에 종속적인 지역 함수의 정의가 가능하며
        console.log(str + name);    // 지역변수의 특성이 그대로 적용되어 외부에서는 접근 불가.     따라서 로컬 이너
    }                             // 함수의 호출 호이스팅 범위는 주 함수 내로 제한.
    let str = '이름 : ';

    print();
}
printName('박성연');
// print('박성연');