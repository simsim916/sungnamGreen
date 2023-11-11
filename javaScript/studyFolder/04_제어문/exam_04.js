'use strict';

let num1, num2, result;
result = 1;

while(1){
    num1 = +prompt('밑수 :')
    if(num1>=0) break;
    alert('음수가 입력되었습니다. 재입력 바랍니다.')
}

while(1){
    num2 = +prompt('지수 :')
    if(num2>=0) break;
    alert('음수가 입력되었습니다. 재입력 바랍니다.')
}

for (let i = 0; i < num2 ; i++) {
    result *= num1;
}

alert(`${result}`);