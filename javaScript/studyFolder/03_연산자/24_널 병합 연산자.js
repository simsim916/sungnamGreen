/* 

    < Nullish coalescing operator >  

- falsy값을 null과 undefined값으로만 제한함으로써 or(||)의 한계를 벗어나 0, '', NaN 등도 truthy값으로 인정함으로써
  정의된 값과 정의되지 않은 값을 간편히 구분가능하며 단락 평가 성질도 그대로 유지.
  즉, truthy값을 null과 undefined을 제외한 모든 값으로 인정.

형식     :      data1 ?? data2          - data1이 정의된 값이라면(null 또는 undefined가 아니라면) data1을 반환하되,
                                          data1이 정의되지 않은 값이라면(null 또는 undefined) data2 반환.
                                          결과적으로 or와 거의 유사하게 동작하나 평가 기준이 되는 falsy값을 null과
                                          undefined로만 제한하는 차이.


*/

'use strict';

/* 널 병합 연산자의 기본 동작 */
let data1;
let data2 = null;
let data3 = '';
let data4 = 0;
let data5 = NaN;

console.log(data1 ?? 'value');
console.log(data2 ?? 'value');
console.log(data3 ?? 'value');
console.log(data4 ?? 'value');
console.log(data5 ?? 'value');
console.log('-------------');


/* null과 undefined가 아닌 데이터의 검출 */
let input;

console.log(input !== null && input !== undefined ? input : 'value');
console.log('-------------');


/* 널 병합 연산자를 통한 null과 undefined가 아닌 데이터의 검출 */
console.log(input ?? 'value');
console.log('-------------');


/* 널 병합 연산자 적용 시 괄호 없는 and와 or연산자의 나열은 금지 */
// console.log(data1 && data2 ?? 'value');
console.log((data1 && data2) ?? 'value');