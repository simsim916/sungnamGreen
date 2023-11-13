/*
    < 호이스팅(Hoisting) >

- 함수의 정의를 해당 범위의 선두로 끌어올려 처리하는 것으로 전역 개념으로 설정되는 것을 의미.
  단, 함수 선언은 호이스팅 처리되지만 함수 표현식은 호이스팅 처리되지 않음에 주의.
  var형식의 변수도 함수 선언 형태의 함수명과 동일한 명칭을 가지는 경우 함수 선언보다 우선권을
  가져 호이스팅 처리가 가능하지만, 이는 명칭 설계가 적합하지 않은 것으로 권장되지 않으며 특수한
  형태의 가변적 설계시에만 변칙적으로 활용.

*/

'use strict';

console.log(func1('대한', '민국'));
// console.log(func2(1, 10));           // 함수 표현식은 호이스팅되지 않아 호출 불가.

console.log(func2);                     // func2에 대한 var 선언으로 변수 자체는 호이스팅되지만
//                                      // 아래 정의한 함수 표현식은 호이스팅되지 않아 undefined
//                                      // 반환.

function func1(string1, string2) {      // 함수 선언은 함수 호출 호이스팅으로 인한 함수 선언
    return string1 + string2;             // 위치에 관계없이 어디서든 호출 가능.
}
var func2 = function (st, ed) {         // 함수 표현식은 호이스팅되지 않지만 var구문 변수의
    let tot = 0;                          // 선언은 호이스팅되는 것을 확인 가능.

    for (let i = st; i <= ed; i++) {
        tot += i;
    }

    return tot;
};

console.log(func2);
console.log(func2(1, 100));
console.log('--------------------');



// refVar();                // 호이스팅은 함수 호출에 대한 호이스팅일뿐 함수 내에서의 let구문
let value = '값';           // 외부 전역변수에 대한 참조가 호이스팅되지는 않음에 따라 컴파일
//                          // 에러.   var구문으로 변수을 선언한 경우에도 변수 자체의 선언은
refVar();                   // 호이스팅되어 컴파일 에러가 발생치는 않지만, 변수에 대한 할당
//                          // 까지는 호이스팅되지 않아 undefined 반환.
function refVar() {
    console.log(value);
}