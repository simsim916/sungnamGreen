/* 
    < Date 함수와 Date 생성자 >

- Date 함수 : 호스트의 시스템에 종속된 형태의 현재 시간을 문자열 형태로 반환.
              연산 적용이 불가하여 연산시 NaN 값 반환.

- Date 생성자 : 현재 시간 1000분의 1초 단위의 숫자 형태로 반환함에 따라
                연산 적용이 가능.


    < 코드 실행 시간 테스트 >
    
let startTime = new Date();

setTimeout(() => {
    console.log(new Date() - startTime);
}, 3000)

*/

export default function executable(DELAY) {
    let startTime = -new Date();

    return function () {
        if (new Date() - startTime > DELAY) {
            startTime = new Date();

            return true;
        }
    };
}