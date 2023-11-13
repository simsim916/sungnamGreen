/*
    < 함수(Function) 선언 >

- 자바스크립트에서 함수는 객체에 종속적인 메서드와 달리 독립적인 기능을 담당하는 내장 객체(object).
  일급함수(First-class function) 기능이 지원되어 함수를 하나의 값으로 인정함으로써  변수에 저장 및
  인수의 전달, 반환(return)등이 가능. 함수 표현식과 마찬가지로 함수 선언 형식인 경우에도 함수명을
  참조로 전달 가능. 함수의 선언은 함수 호출 호이스팅 현상으로 인해 함수 선언 위치에 관계없이 호출
  가능하며, 함수 선언부 내에서의 외부 전역변수에 대한 참조는 전역변수의 선언 위치에 관계없이 함수
  내에서 참조 가능. 단, 전역변수를 참조한 함수에 대한 호출 시점이전에 반드시 전역변수가 먼저 선언
  되어 있어야 함에 주의.

형식    :   function 함수명(형식인수) {             
                실행블럭;
                [return 리턴값] or [return]
            }

1) 형식인수 : 자바스크립트는 타입을 동적으로 결정하므로 함수의 형식인수에는 var, let, const등 구문 사용 불가.
2) 실인수 : 실인수의 갯수는 형식인수 갯수보다 더 적거나 더 많이 명시를 해도 무방.   단, 실인수가 형식
            인수 갯수보다  적은 경우에는  실인수값이 형식인수에 순서대로 할당이 되데  남는 형식인수는
            초기화되지 않으므로  undefined값 할당.     반면,   실인수가 형식인수 갯수보다 많은 경우에
            전자와 동일하게 실인수값이 형식인수에 순서대로 할당이 되데 남는 실인수 값들은 참조를 잃어
            버려 직접 참조는 불가하지만, aguments객체를 통한 간접 참조 가능.
3) 리턴값에 대한 리턴 타입 지정이 불필요하며 함수에 대한 명시적 return을 하지않는 경우 자동적으로 undefined값
   반환.

*/

'use strict';

function test1(a, b) {
    console.log(b);
    console.log(a + b);
    console.log();
}
test1(5, 3);
test1(5);           // 두 번째 인수값은 초기화되지 않아 undefined값이 할당되고 전달된 첫 번째 인수와의 
//                  // + 연산으로 인해 NaN값 반환.

test1(7, 5, 4);     // 세 번째 이후의 인수값은 참조를 잃어버려 직접 참조 불가.


function test2(n1, n2) {
    return n1 + n2;             // 명시적 리턴.
}
console.log(test2(10, 15));
console.log('-------------------------');


function test3() {
    // return undefined;    // 명시적 리턴을 하지 않아도 자동으로 undefined값이 반환되는 것을 확인 가능.
}                         // 즉, 당행과 같이 'return undefined;' 코드가 자동으로 삽입.
console.log(test3());
console.log('-------------------------');


function test4() {
    console.log('passed func');
}
function test5(func) {
    func();
}
test5(test4);       // 함수명을 직접 참조로 전달 가능하며 이를 통해 다른 함수 내에서도 전달한
//                  // 함수의 참조를 통해 직접 호출 가능. ( 콜백함수(Callback function) )
console.log('-------------------------');


function test6() {
    console.log(n)      // 함수선언후 전역변수 n을 선언하였지만 함수 내에서는 전역 변수의 선언 위치에
}                     // 관계 없이 어디에서든 참조 가능. 단, 전역변수를 참조한 함수에 대한 호출 시점
//                    // 이전에 반드시 전역변수가 먼저 선언되어 있어야 함에 주의.

// test6();

let n = 25;

test6();
console.log('-------------------------');


function div(a, b) {
    if (isNaN(a + b)) {                 // isNaN함수는 숫자형태의 문자열도 숫자로 인정.
        console.log("입력값이 숫자가 아님~~~");
    } else {
        console.log(a + " / " + b + " = " + (a / b));
    }
}
div("9", "4");      // 자바스크립트에서는 문자열 구분자("")로 묶어도 자료의 형태가 숫자 형태이면
div("a", 4);        // 숫자로 인식 가능.
console.log('-------------------------');


/*
    agruments : 전달된 인수값들을 배열 형태로 내부에 저장하는 객체로써 실제 배열은 아니므로 배열에 적용되는
                메서드 속성의 사용은 불가.   agruments객체의  length속성을 이용하여 객체 내부 배열의 크기를
                조사 가능하며 배열 연산자([])를 통해 저장되어 있는 인수 값을 간접 참조 가능.
*/
function accessArguments(n1, n2) {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    console.log();
}
accessArguments(1);             // arguments객체는 형식인수의 갯수에 관계없이 실제 전달된 실인수 만큼만
accessArguments(1, 2);          // 객체 배열에 저장하므로 형식인수와 실인수의 대응 관계와 관계없이 전달된
accessArguments(1, 2, 3);       // 실인수만 정확히 조사 가능.
accessArguments(1, 2, 3, 4);