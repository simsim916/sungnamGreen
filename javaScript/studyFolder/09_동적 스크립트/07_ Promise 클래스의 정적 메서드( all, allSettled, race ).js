'use strict';

/* 
   < Promise 클래스의 정적 메서드 all >

- Promise 클래스의 정적메서드 all 의 인자에 배열화된 프라미스 객체를
  할당함으로써, 배열 형태의 요소를 결과값으로 갖는 프라미스 객체가 반환.
*/
Promise.all([
   new Promise(resolve => resolve(1)),
   new Promise(resolve => resolve(2)),
   new Promise(resolve => resolve(3))
]).then(console.log);

/* 
   프라미스의 결과를 갖는 배열은 실행 순서에 관계없이 전달한 순서대로
   배열에 할당되는 것을 확인 가능.
*/
Promise.all([
   new Promise(resolve => setTimeout(() => resolve(10), 3000)),
   new Promise(resolve => setTimeout(() => resolve(20), 2000)),
   new Promise(resolve => setTimeout(() => resolve(30), 1000))
]).then(console.log);

/* 
   all 메서드의 인자에 할당된 배열 요소가 하다라도 실패하면, 모두
   실패한 것으로 결정되어 에러에 대한 결과를 반환하는 프라미스 객체를
   반환.
*/
Promise.all([
   new Promise((resolve, reject) => resolve(1)),
   new Promise((resolve, reject) => resolve(2)),
   new Promise((resolve, reject) => reject(new Error('에러 발생'))),
]).then(
   console.log,
   err => console.log(err.message)
);

/* ======================================================================= */

/* 
   < Promise 클래스의 정적 메서드 allSettled >

- allSettled 메서드의 인자에 할당된 배열 요소중 하나가 실패하더라도 실패한
  결과와 성공한 결과를 모두 객체 형태의 요소로 가지는 배열을 반환함으로써,
  실패하더라도 성공한 경우에 대한 결과값을 보존 가능.


성공한 경우의 배열 요소 객체 형태 : { status: 'fulfilled', value: 결과값 }
실패한 경우의 배열 요소 객체 형태 : { status: 'rejected', reason: 에러객체 }
*/
Promise.allSettled([
   new Promise((resolve, reject) => resolve(1)),
   new Promise((resolve, reject) => resolve(2)),
   new Promise((resolve, reject) => reject(new Error('에러 발생'))),
]).then(
   console.log
);

/* ======================================================================= */

/* 
   < Promise 클래스의 정적 메서드 race >

- 성공 또는 실패에 관계없이 가장 먼저 처리되는 프라미스 결과를 반환.
*/
Promise.race([
   new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
   new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
   new Promise((resolve, reject) => setTimeout(() => reject(new Error('에러 발생')), 1000)),
]).then(
   console.log,
   err => console.log(err.message)
);