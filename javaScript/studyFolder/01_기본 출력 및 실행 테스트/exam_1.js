'use strict';

for( let num1, num2; ; ){
    
    num1 = +prompt("정수1 : ")
    num2 = +prompt("정수2 : ")
    if(num1 >= num2){
        alert(`${num1}과(와) ${num2}의 차는 ${num2-num1}입니다.`)
    } else {
        alert(`${num1}과(와) ${num2}의 차는 ${num1-num2}입니다.`)
    }
    if(confirm("창을 닫을 까요?")){
        break;
    }
}