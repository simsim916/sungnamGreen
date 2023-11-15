/*
    < 객체 리터럴(Literal)  생성 형식 > - 일회성 객체

const 참조변수 = {
    속성1,
    속성2,
    속성3,
};

속성(Property) : 콜론(:)구분자를 기준으로 키(Key)와 값(value)으로 구성.

- 속성의 키는 문자열이나 심볼(Symbol)만 가능한 반면, 속성의 값은 객체, 배열, 함수(메서드)를 포함한 모든 자료형이 가능.
  단, 계산된 프로퍼티 형식을 이용하는 경우 키에도 변수 지정 가능.

*/

'use strict';

const car = {
   'carName': 'sonata',
   color: 'red',            // 키는 문자열만 가능하여 문자열 구분자('') 생략 가능.
   carNum: 1,
   'car type': 'sedan',     // 키에 공백이나 특수문자가 포함되는 경우 반드시 문자열 구분자('')를 이용하여 표기.
   //                       // // 이때의 접근은 계산된 프로퍼티 형식으로만 접근 가능.

   5: 'a',                  // 키를 숫자 형태로 표기하였지만 내부적으로 문자열 형식으로 처리.
   //                       // 이때의 접근은 계산된 프로퍼티 형식으로만 접근 가능.
};

console.log(car[5]);
console.log(car.color);
console.log(car.carNum);
console.log(car["car type"]);    // 객체의 속성 접근시 멤버 접근 연산자(.)나 또는 배열 접근 연산자(계산된 프로퍼티)
//                               // 사용 가능. 단, 공백이나 숫자형식 또는 특수문자가 포함된 키의 경우 배열 접근
//                               // 연산자로만 접근 가능.

console.log(car);      // 객체의 참조는 중괄호 블럭('{ }') 내에 객체 내부의 모든 속성(키,값)을 쉼표로 구분
console.log();         // 하여 반환. 이때 키가 숫자 형식이거나 공백 또는 특수문자가 포함된 경우 문자열 구분자를
//                     // 포함한 형식으로 반환.

console.log(car.fuel);                    // 존재하지 않는 필드에 대한 접근은 컴파일 에러가 아닌 undefined 반환.
// console.log(car.run());                // 단, 존재하지 않는 메서드에 대한 접근은 컴파일 에러 발생.
console.log('------------------------');


// console.log(car[color]);      // 계산된 프로퍼티 형식으로 접근시 키가 문자열인 경우에는 반드시 문자열 구분자를
console.log(car['color']);       // 사용하여 접근 가능하되 외부 변수나 숫자 형태는 구분자 없이 직접 접근 가능.
console.log(car[5]);
const keyColor = 'color';
console.log(car[keyColor]);
console.log('------------------------');


car.typeOfFuel = 'gasoline';   // 객체를 생성한 이후에도 이처럼 새로운 속성을 추가 가능. 특수한 개별 객체에 대하여
console.log(car);              // 어떤 조건이 부합하는 경우 이러한 형식으로 속성을 추가하는 형태로 활용.
console.log('------------------------');


delete car.carNum;        // 객체를 생성한 이후에도 delete 예약어를 통해 이처럼 속성을 삭제 가능.
console.log(car);         // 형식 : delete 객체.키
console.log('------------------------');


const key1 = 'father', key2 = 'mother';
const value1 = '아빠', value2 = '엄마';

const faimly = {
   [key1]: value1,       // 계산된 프로퍼티를 이용한 동적 프로퍼티 생성. 키에는 문자열이나 심볼만 적용이 가능하지만,
   [key2]: value2,       // 계산된 프로퍼티 형식을 이용하는 경우에는 변수 지정 가능.
};

console.log(faimly);