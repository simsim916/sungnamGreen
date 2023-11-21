'use strict';

async function loadScript(src) {
    try {

        /* 
            await 는 프라미스 객체에만 지정 가능하고 async 지정 함수 내에서만 사용
            가능하므로 순서 제어를 위해 아래와 같이 프라미스 객체를 별도로 생성하여
            await 을 지정.
        */
        await new Promise((resolve, reject) => {
            let script = document.createElement('script');

            script.src = src;
            document.head.append(script);
            
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`${src} 로드 실패`));
        });
    } catch (error) {
        console.log(error.message);

        return;
    }

    test();
}

loadScript('./01_01.js');
loadScript('./01_02.js');