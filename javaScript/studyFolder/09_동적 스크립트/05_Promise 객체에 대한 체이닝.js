'use strict';

/* 
    < 프라미스 객체에 대한 체이닝 >

- 프라미스 객체에 대한 then 메서드 호출은 결과값을 리턴하면
  해당 결과값을 가지는 프라미스 객체를 다시 반환하므로
  아래와 같이 체이닝 연산을 통한 연속적인 결과값 가공이 가능.
  단, 리턴을 하지 않으면 자동 undefined 가 반환되어,
  undefined 를 결과값으로 가지는 프라미스 객체가 반환됨에 주의.
*/
new Promise(resolve => {
    resolve(1);
})
    .then(
        result => {
            console.log('첫 번째 프라미스');
            console.log(++result);

            return result;
        }
    )
    .then(
        result => {
            console.log(++result);

            return result;
        }
    )
    .then(
        result => console.log(++result)
    );

console.log('=======================================');

/*
    아래와 같이 새로운 프라미스를 생성하여 반환하는 것도 가능.

    프라미스 객체의 실행은 큐 형태로 실행되어 최초 프라미스
    실행이 모두 처리된 이후에 다음 프라미스 객체가 실행되는
    특성을 가져 아래와 같은 결과를 확인 가능.
    즉, 위의 "첫 번째 프라미스" 와 "두 번째 프라미스" 는 최초
    then 메서드 호출까지는 비동기적으로 순서대로 실행되지만,
    then 메서드 내의 새로운 프라미스 객체의 생성은 이전
    프라미스가 모두 처리 완료되어야만 실행되는 특성으로 인해
    "첫 번째 프라미스" 의 모든 then 메서드 실행이 완료된
    이후 "세 번째 프라미스" 와 "네 번째 프라미스" 객체에 대한
    then 메서드가 실행되는 것을 확인 가능.

    < 출력 결과 분석 >

    =======================================
    첫 번째 프라미스
    2
    두 번째 프라미스
    3
    4
    세 번째 프라미스
    네 번째 프라미스

*/
new Promise(resolve => {
    resolve('두 번째 프라미스');
})
    .then(
        result => {
            console.log(result);

            return new Promise(resolve => {
                resolve('세 번째 프라미스');
            });
        }
    )
    .then(
        result => {
            console.log(result);

            return new Promise(resolve => {
                resolve('네 번째 프라미스');
            });
        }
    )
    .then(
        result => console.log(result)
    );