'use strict';

/* 
    프라미스 객체는 기본적으로 콜백함수를 인자로 받고
    이를 executor(실행자) 함수라 지칭하며, 해당 함수는
    프라미스 객체 생성과 동시에 동기적으로 바로 실행되는
    특성.
*/
new Promise(() => {
    console.log('executor : 실행자 콜백함수');
});

console.log('=======================================');

/* 
    < resolve, reject 인자 >

- 콜백함수인 실행자 함수에는 기본적으로 resolve, reject 매개변수가
  제공되는데, 각각 실행에 대한 성공과 실패 처리가 가능한 콜백함수의
  참조로써, 해당 함수의 콜백 호출시의 실인수 전달이 then 메서드의
  실인수에 정의한 콜백함수의 매개변수로 전달이 가능.
  프라미스는 실행자 내에서 반드시 성공 또는 실패 둘 중 하나만 실행이
  가능하며, 중복 처리가 모두 무시되는 특성.
  즉, 성공(resolve) 이후에 또다른 성공이나 실패가 처리되지 않는
  것처럼 실패(reject) 이후에도 또다른 실패나 성공은 실행되지 않음.
  성공과 실패는 반드시 모두 처리해야 하는 것은 아니며, 성공 또는
  실패만 개별적으로 처리해도 무방.

===================================================================

    < then 메서드 >

- 프라미스 객체의 실행자에서 resolve, reject 함수로 호출되어 전달된
  값을 받아 실행할 수 있는 함수로써, then 메서드의 실인수로 전달한
  콜백함수는 then 메서드에 의해 콜백 실행되는 특성.
  첫 번째 인자는 성공에 대한 콜백 함수를 정의하고, 두 번째 인자는
  실패에 대한 콜백 함수를 정의.
  또한, then 메서드의 실행은 모든 동기 코드가 완료된 이후 비동기적
  으로 실행되는 것을 확인 가능.
*/
new Promise((resolve, reject) => {
    resolve('성공');
    reject('실패');
}).then(
    result => console.log(result),
    err => console.log(err),
);

console.log('=======================================');

/* 
    < 성공만 처리하는 경우 >

- then 메서드의 실인수에 매개변수를 지정하지 않은 상태의 콜백 호출할
  참조만 전달하여도 기본적으로 resolve, reject 함수로 호출시의 실인수
  값을 자동으로 끌고와 콜백 호출시 실인수로 사용됨을 확인 가능.
*/

new Promise((resolve) => {
    resolve('성공');
}).then(console.log);

console.log('=======================================');

/* 
    < 실패만 처리하는 경우 - then >

- Promise 객체 실행자 함수의 첫 번째 인수(resolve)는 생략하거나
  null 값으로 대체 불가하지만, then 메서드의 첫 번째 실인수는
  null 값으로 대체 가능.
  즉, 실패만 처리하는 경우 then 메서드의 첫 번째 인수에 null 값
  할당.
*/

new Promise((resolve, reject) => {
    reject('실패');
}).then(
    null,
    console.log
);

/* 
    < 실패만 처리하는 경우 - catch>

- catch 메서드는 실패만 다루는 경우 then 을 대체하여 사용 가능한
  메서드로써, then 과 같이 첫 번째 인자에 null 값 할당하는 처리가
  필요없음.
*/

new Promise((resolve, reject) => {
    reject('실패');
}).catch(console.log);

console.log('=======================================');

/* 
    < finally 메서드 >

- finally 메서드는 예외 처리와 같이 성공, 실패 결과에 관계없이
  공통적인 처리가 가능한 메서드로써, finally 메서드의 인자로
  들어가는 콜백함수에는 매개변수가 없음에 주의.
  또한 프라미스 객체에 대한 then 또는 finally 메서드 호출의 결과는
  프라미스 객체의 실행자 함수 결과를 가지고 있는 프라미스 객체가
  다시 반환되므로 호출 순서는 관계가 없음.
*/
new Promise((resolve, reject) => {
    resolve('성공');
    reject('실패');
})
    .then(
        result => console.log(result),
        err => console.log(err),
    )
    .finally(
        () => console.log('성공, 실패와 무관한 공통 처리')
    );