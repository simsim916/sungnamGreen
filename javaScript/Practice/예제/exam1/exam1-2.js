'use strict';

let service_container = document.querySelector('.service_container'),
    service_list = service_container.getElementsByClassName('service_list'),
    btn_collapseAll = service_container.querySelector('.btn_collapseAll');

let openList = service_list[0];     // 직전 service_body 가 열려있던 리스트에 대한 참조.

function set_openList() {           // 직전 열려있던 리스트를 숨기고 문자열을 변경하는 함수.
    openList.classList.add('hidden');
    openList.childNodes[1].textContent = `+${openList.childNodes[1].textContent.slice(1)}`;
}

service_container.addEventListener('click', (event) => {
    /*
        service_header 가 별도의 자손요소를 포함하지 않으므로 closest 메서드를
        통한 인접 조상요소에 대한 점검이 필요치 않음.
        또한 closest 메서드를 사용치 않음으로써 이벤트 위임 조상 핸들러에 대한
        포함 여부 체크도 필요치 않음.
    */
    const eventTarget = event.target;

    if (eventTarget.classList.contains('service_header')) {
        set_openList();
        eventTarget.parentNode.classList.remove('hidden');
        eventTarget.textContent = `-${eventTarget.textContent.slice(1)}`;
        openList = eventTarget.parentNode;
    }

    // if (eventTarget.className === 'service_header') {
    //     set_openList();
    //     eventTarget.parentNode.classList.remove('hidden');
    //     eventTarget.textContent = `-${eventTarget.textContent.slice(1)}`;
    //     openList = eventTarget.parentNode;
    // }
});

btn_collapseAll.addEventListener('click', set_openList);