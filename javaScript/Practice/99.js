'use strict';

let num1 = +prompt('정수1 :');
let num2 = +prompt('정수2 :');

if(isNaN(num1+num2)){
    alert('두 수중 하나는 숫자가 아닙니다.')
} else {
    alert(`${num1} + ${num2} = ${num1+num2}`)
}