/*
    < 콜백함수(Callback function) >

- 정의된 함수의 참조를 통해 나중에(back) 호출(call)하는 것을 의미.
*/

'use strict';

function agree() {
    alert('개인정보 활용에 동의하셨습니다.');
}
function disagree() {
    alert('개인정보 활용에 동의하지 않았습니다. 다시 확인부탁드립니다.');
}
function inputCheck1() {
    if (confirm('개인정보 활용에 동의하십니까?')) {
        agree();
    } else {
        disagree();
    }
}
inputCheck1();


function inputCheck2(ok, no) {
    if (confirm('개인정보 활용에 동의하십니까?')) {
        ok();
    } else {
        no();
    }
}
inputCheck2(agree, disagree);   // 함수 선언에 대한 참조 전달을 통한 콜백 호출.

inputCheck2(        // 함수 표현식에 대한 참조 전달을 통한 콜백 호출.

    function () { alert('개인정보 활용에 동의하셨습니다.'); },
    function () { alert('개인정보 활용에 동의하지 않았습니다. 다시 확인부탁드립니다.'); }
);