/*
    < 문제 >

- 다음과 같이 email 변수에 이메일 주소가 저장되어 있을 때,
  메일주소의 처음과 @ 앞에 "_" 를 삽입하고 @ 뒤의 도메인명은
  개별 도메인명의 뒤에 ".kr"이 삽입되어 email 변수에 저장하도록
  프로그램을 구현.
  단, 아래 메일주소와 도메인명은 예시일뿐 다른 모든 메일주소와
  도메인명에 대하여 적용되야함에 주의.
   ( replace 사용 불가 )

    < 변환 예시 >

    psy1234@daum.net       ->      _psy1234_@daum.kr.net

    ysk999990@naver.com    ->      _ysk999990_@naver.kr.com
*/

'use strict';

let email = 'psy1234@daum.net';

email += '_';
email = email.replace('','_');
email = email.replace('@','_@')
email = email.replace('.','.kr.')
console.log(email);