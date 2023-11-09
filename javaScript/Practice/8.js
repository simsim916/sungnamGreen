'use strict';

let num = prompt('숫자 입력 :')

if(confirm('입력한 값이 숫자가 맞습니까?')){
    if (!isNaN(num)){
        alert('입력한 값이 숫자가 맞습니다.')
    } else {
        alert('입력된 값이 숫자가 아닌거 같습니다. 프로그램을 종료합니다.')
    }
} else {
    alert('반복문')
}