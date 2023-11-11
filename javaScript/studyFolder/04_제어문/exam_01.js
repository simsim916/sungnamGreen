/*
  < 문제 >

- 이름을 입력받아 대화상자 형태로 화면에 이름을 표시하는 프로그램을 구현.
  단, 입력 대화상자가 비어있는 상태로 "확인" 버튼을 누르거나 "취소" 버튼을
  눌렀을 때 "이름이 정상적으로 입력되지 않았습니다!!" 문구와 함께 프로그램이
  종료되도록 구현.
*/
'use strict';

let num1, num2, result, num3;
result = 0;
result2 = 0;
result3 = 0;

while(1){
  num1 = +prompt('작은 수 :')
  num2 = +prompt('큰 수 :')
  if(num1>=num2) break;
}

for (; num1 < num2+1; num1++){
    result += num1;
}
alert(`${result}`);
