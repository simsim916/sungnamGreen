'use strict';

/* 
    < JSON(JavaScript Object Notation) >

- 값이나 객체를 나타내주는 표준 범용 포맷으로써, 자바스크립트에서
  사용할 목적으로 만들어진 포맷이지만, 특정 라이브러리를 사용하면
  자바스크립트가 아닌 언어에서도 JSON 을 조작 가능.
  일반적으로 JSON 은 클라이언트 측 언어가 자바스크립트일 때 데이터
  교환 목적으로 활용.
*/
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

/* 
    < JSON 클래스의 정적메서드 stringify >

- js 객체를 직렬화된 형태의 JSON 형식 객체로 변환시켜주는
  메서드로써 반환된 JSON 객체는 문자열임을 확인 가능.

=============================================================

- 변환된 JSON 형식의 객체는 아래와 같이 객체의 프로퍼티
  (필드)가 모두 문자열 형식으로 구성되어 있음을 확인 가능
  하며, 문자열 구분자 또한 싱글쿼터(')가 아닌 더블쿼터("")로
  구성 되어야함.
  즉, JSON 은 싱글쿼터(')나 백틱(`)이 인정되지 않음.


    < 변환 결과 >

    {
        "name": "John",
        "age": 30,
        "isAdmin": false,
        "courses": ["html", "css", "js"],
        "wife": null
    }

=============================================================

    < stringify 메서드로 변환 가능한 대상 >

- 객체, 배열, 문자열, 숫자형, 불린형, null



    < stringify 메서드로 변환 무시되는 대상 >

- 객체의 함수 프로퍼티, 심볼, undefined
*/
console.log(json);
console.log(typeof json);

/* ==================================================================== */

/* 
    < JSON 클래스의 정적메서드 parse >

- JSON 객체를  js 객체로 변환.
*/
let obj = JSON.parse(json);

console.log(obj);
console.log(typeof obj);