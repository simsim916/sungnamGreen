/*
    < 함수 표현식 >

- 자바스크립트에서 함수는 object에 속하므로 변수에 할당 및 메서의 인수로 전달 또는 리턴값으로 반환등이 가능.
  함수 선언과 함수 표현식의 가장 큰 차이점은 함수 선언은 호이스팅(Hoisting)이 되지만, 함수 표현식은 적용되지
  않음.


  함수 표현식 형식    :   let 참조변수명 = function [함수명](형식인수) {         
                              실행블럭;
                              [return 리턴값] or [return]
                          };

- 함수명 지정이 가능하지만 외부에서 함수명을 통한 직접 호출은 불가. 이는 참조변수를 통해 함수명 식별이
  가능한 특성을 활용하여 디버깅 용도나 재귀 호출 목적으로 활용.

※ 함수 선언와 달리 중괄호 실행블럭 끝에 세미콜론을 표기. 함수 선언이나 함수 표현식 모두 실제 세미콜론
   지정 여부와 관계없이 실행되지만 코드 가독성을 위해 구분하는 것을 지향. 

*/

'use strict';

const namingFunc = function identify() {      // Named function.  
    console.log('Naming func');
};

namingFunc();
// console.log(identify());     // 함수 표현식으로 정의되어 있는 함수명을 통한 직접 호출은 불가하지만,
console.log(namingFunc);        // 참조 변수를 통한 함수명(식별자) 확인은 가능.
console.log();


const sum = function (a, b, c) {              // Anonymous function.
    return a + b + c;
};
console.log(sum(1, 2, 3));
console.log();


const varSum = function (obj) {
    return obj.n1 + obj.n2 + obj.n3 + obj.n4 + obj.n5;
};
console.log(varSum({ n1: 1, n2: 2, n3: 3, n4: 4, n5: 5 }));    // 실인수부에서 직접 리터럴 객체를 생성하여 형식 인수로
console.log();                                                 // 참조. 함수 선언에서도 동일한 형태로 적용 가능.


const output = function () {
    console.log('출력테스트');
};
const call_output = function (test) {        // 함수의 형식 인수에는 객체나 배열 뿐만 아니라, 
    test();                                    // 함수의 참조도 전달 가능.
};
call_output(output);