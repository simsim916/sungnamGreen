/*
    < 자바스크립트의 자료 표현 형식 >

- boolean, null, undefined, number, bigint, string, symbol 이상의 기본 자료형(Primitive : 원시 타입)과
  참조형  Object로 구성되며 변수의 타입이 아님에 유의.   Object를 제외한 기본 자료형은 더 이상 쪼갤수
  없는 값을 의미하고 이러한 값을 원시값(Primitive value)이라 지칭하며 설정 및 쓰기가 불가한 값(상수)을
  의미.


boolean : null, NaN(Not a Number), Undefined, ""(빈문자열), 0 은  false와 같진 않지만  조건식이나 산술
          연산 시 상호 변환하여 평가 가능하며, 그 외의 값에 대해서는 연산 시 true로 변환하여 평가 가능.
          논리 연산자 !(not)을 이용하여 확인 가능.

undefined : 값을 할당하지 않은 변수(미 초기화)는 브라우저가 undefined값 할당.
            또한 명시적 반환(return)을 하지않는 함수도 undefined값을 반환.

null : null은 사용자가 명시적으로 할당.

bigint : number보다 더 큰 정수를 표현하기 위한 타입. 숫자 상수에 접미사 n을 붙여 표현.

symbol : ECMAScript 6에서 추가된 타입으로 열거형과 유사한 고유한 식별자로써의 기능을 담당하며 객체의
         속성 key값으로도 사용 가능.    다른 래퍼(Wrapper) 객체와는 달리 new연산자를 통한 Symbol객체
         생성은 불가.

---------------------------------------------------------------------------------------------------------

    < 변수의 자료형 >

- 자바스크립트에서 변수의 타입은 느슨한 타입(loosely typed) 또는 동적 타입(dynamic typed)이 
  적용되어 별도의 변수의 타입을 구분하지 않으며 대입되는 값에 의해 그 타입이 동적으로 결정.
  따라서 하나의 변수에 여러 타입의 값을 저장 가능.

*/

'use strict';

let value;

value = 15;
value = null;
value = false;
value = 'string';          // Dynamic typing.

console.log(value);
console.log();


console.log(!null);       // boolean 타입의 값이 대상이 되는 논리연산자(!)에 다른 타입의 값을
console.log(!undefined);  // 대상으로 함으로써 자동으로 boolean 타입의 값으로 변환하여 연산.
console.log(!NaN);
console.log(!'');
console.log(!0);
console.log();


let n;
console.log(n);          // n은 명시적 선언을 하였지만, 초기화하지 않았으므로 undefined값으로 평가.
console.log();

function test1() {       // 명시적 반환을 하지 않는 함수도 undefined값을 반환.
    let n = 5;
}
function test2() {
    return 10;
}
console.log(test1());
console.log(test2());
console.log();


const symbol1 = Symbol('enum');         // 고유한 심볼 식별자 생성. 자바의 new String("문자열")과 유사.
const symbol2 = Symbol('enum');
const symbol3 = Symbol.for('enum');     // Symbol.for() : 별도의 전역 기호 레지스트리(Global symbol registry) 영역에 
const symbol4 = Symbol.for('enum');     // 고유한 심볼을 생성하되,  전역 기호 레지스트리를 검색하여  기존에  동일한
/*                                         심볼이 존재하는 경우 동일한 참조를 반환. 자바의 String의 intern()과 유사. */

console.log(symbol1 === 'enum');    // false
console.log(symbol1 === symbol2);   // false
console.log(symbol1 === symbol3);   // false
console.log(symbol3 === symbol4);   // true
console.log();

console.log(symbol1);               // Symbol(enum)
console.log(symbol1.toString());    // Symbol(enum)  
console.log(symbol1.description);   // enum


// alert(symbol1);                  // Uncaught TypeError: Cannot convert a Symbol value to a string
//                                     심볼은 항상 문자열로 자동 변환되어 반환되지 않음에 주의.
alert(symbol1.toString());          // toString : 자바스크립트 최상위 객체인  Object로부터 자동 상속되는 메서드로
//                                                기본적으로 객체에 대한 정보를 문자열로 반환. 자바와 거의 유사.
alert(symbol1.description);         // description : description속성을 이용하여 심볼값 자체에 대한 문자열 반환.