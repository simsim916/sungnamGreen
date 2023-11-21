'use strict';

function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');

        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`${src} 로드 실패`));
        document.head.append(script);
    });
}

loadScript('./javascript/script1.js')
    .then(
        () => {
            test();

            return loadScript('./javascript/script2.js');
        },
        err => console.log(err.message)
    )
    .then(
        () => {
            test()
        },
        err => console.log(err.message)
    );