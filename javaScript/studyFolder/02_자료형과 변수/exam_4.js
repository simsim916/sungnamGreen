/* 
< 사이트 URL을 이용한 비밀번호 생성 >

step1 : "http://" 부분은 제외하고 추출.                             =>      daum.net
step2 : 닷(.)부터 표시되는 문자열을 제외하여 추출.                   =>      daum
step3 : '$' + 처음 3자리 + 총 글자 수 + url 의 14번째 문자.         =>      $dau4e

※ url 의 14번째 문자가 존재하지 않을 때는 ? 문자로 표시.            =>      $dau4?
*/

'use strict';

let url = 'http://daum.net';
let url1 = url.split('//');
let url2 = url1.split('.');

console.log(`$${url2[0].slice(0,2)}`);