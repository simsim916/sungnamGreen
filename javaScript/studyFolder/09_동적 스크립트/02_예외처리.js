'use strict';

function loadScript(src, callback) {
    let script = document.createElement('script');

    script.src = src;
    document.head.append(script);

    /* 
        정상적인 로드시에는 콜백함수의 매개변수 err 에
        null 값이 할당되도록 함으로써, 다음 loadScript
        함수 호출이 정상적으로 실행되도록 제어.
    */
    script.onload = () => callback(null);

    /* 
        로드 실패시에는 Error 객체를 생성하여 콜백함수의
        매개변수 err 에 할당함으로써 로드 실패에 대한 방어
        코드가 처리되도록 구현.
    */
    script.onerror = () => callback(new Error(`${src} 로드 실패`));
    // script.addEventListener('error', () => callback(new Error(`${src} 로드 실패`)));
}

/* 
    < 스크립트 로드시의 에러 핸들링 패턴과 콜백 지옥 >

- 스크립트 파일에 대한 로드 실패시의 에러 처리를 위해 익명 객체 전달시, 에러가
  발생했을 때의 에러 객체를 받기 위한 매개변수를 전달함으로써, 에러가 발생했을
  때는 에러 객체가 할당이 되도록하고, 에러가 발생치 않고 정상적인 로드가 되는
  경우에는 null 값을 전달함으로써 정상적 로드 상황에서의 처리가 진행 되도록 구현.

  ※ 이러한 중첩된 콜백 처리와 더불어 에러 제어 패턴은 순서 제어가 필요한 스크립트
     파일이 추가될수록 지속적인 중첩이 발생됨에 따라, 일명 "콜백 지옥" 이라는 불리는
     최악의 코드 가독성과 유지 보수를 어렵게 하는 난해한 코드가 만들어지는 문제점 발생.
*/
loadScript('./javascript/script1.js', err => {
    if (err) {
        console.log(err.message);
    } else {
        test();

        loadScript('./javascript/script2.js', err => {
            if (err) {
                console.log(err.message);
            } else {
                test();
            }
        });
    }
});