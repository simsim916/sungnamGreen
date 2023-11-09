/*
    < 문제 >

- 주민번호를 입력받되 하이픈(-)을 포함하여 입력하면 "하이픈(-)을 공백으로 변경을 원하십니까?" 라는
  문구를 표시하는 확인/취소 대화상자를 활성화시켜 "확인" 버튼을 클릭하면 공백으로 변경하고 "취소"
  버튼을 클릭하면 하이픈이 포함된 그대로 대화상자에 표시되도록 프로그램 구현.
  단, 하이픈이 포함되지 않은 경우에는 입력받은 그대로 대화상자에 표시되도록 구현.
*/

'use strict';

let userNum;

userNum = prompt('주민번호 : ')

if (userNum.indexOf('-')){
    if (confirm('하이픈(-)을 공백으로 변경을 원하십니까?')) {
        userNum = userNum.replace('-',' ');
    }
}

alert(userNum);
