'use strict';

/* 
   < Spread Syntax > - 전개구문

- 함수 호출 시 실인수로 전달된 값들을 복사하여 배열 형태로 전달.
*/
function spreadAr(...a) {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
    console.log('===============================');
}

spreadAr(1, 2, 3);
spreadAr(1, 2, 3, 4, 5);
spreadAr('가', 11, '나', 12, '다', 13);

console.log('===============================');
console.log('===============================');


let ar1 = [1, 2, 3];
let ar2 = [1, 2, 3];

let ar3 = [ar1, ar2];      // 배열의 참조 전달을 통한 2차원 배열 생성.

console.log(ar3);

console.log('===============================');
console.log('===============================');


let a1 = [1, 2, 3];
let a2 = [1, 2, 3];

/* 
   < 전개구문을 활용한 배열의 결합 >

- 전개구문을 적용시킴으로써 배열의 참조가 아닌 값을 복사하고 개별 배열을
  생성하는 것이 아닌 하나의 통합된 배열을 구성.
*/
let a3 = [...a1, ...a2];

console.log(a3);

a2[2] = 4;    // 전개구문은 배열요소의 값 자체를 복사하는 것이지 값의
//             // 참조 자체를 복사하는 것은 아님에 주의.

console.log(a3);
console.log(a2);

console.log('===============================');
console.log('===============================');

/* 
   < 구조분해 할당(Destructuring Assignment) >

- 배열이나 객체를 분해하여 개별 요소의 참조를 재할당 가능.   
*/
let [element1, element2] = ['요소1', '요소2'];

console.log(element1);
console.log(element2);

console.log('===============================');


/* 
   < 전개구문을 활용한 구조분해 할당 >
*/

let [e1, e2, e3, ...restElement] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(e1);
console.log(e2);
console.log(e3);
console.log(restElement);