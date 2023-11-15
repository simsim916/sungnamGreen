
//함수 실행

// 표현식
let num = 0;

let plus = function () {
    num +=5;
};
//선언문
let number = 0;
function plus2 (number2) {
    number2 += 5;
    number = number2;   
}

plus2 (number);
console.log(plus2(number));

