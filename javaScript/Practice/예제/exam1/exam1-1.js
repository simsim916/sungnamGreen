'use strict';

let service_container = document.querySelector('.service_container'),
    service_list = service_container.getElementsByClassName('service_list'),
    service_header = service_container.getElementsByClassName('service_header'),
    btn_collapseAll = service_container.querySelector('.btn_collapseAll');  

let openList = service_list[0];     // 직전 service_body 가 열려있던 리스트에 대한 참조.

/*
    < childNodes >

- 지정한 요소의 자식 요소들에 대한 참조를 배열 형태로 반환.
  단, 포함되는 자식 요소는 개행문자나 주석도 개별 요소로 각기 배열에 할당됨에 주의.

===========================================================================================

    < children >

- 지정한 요소의 자식 요소들에 대한 참조를 배열 형태로 반환하되,
  childNodes 와 달리 개행문자나 주석은 개별 요소로 포함되지 않음.

  따라서 아래 함수 코드 "openList.childNodes[1].textContent" 는
  "openList.children[0].textContent" 로 변경하여 참조 가능.
*/

function set_openList() {           // 직전 열려있던 리스트를 숨기고 문자열을 변경하는 함수.
    openList.classList.add('hidden');
    openList.childNodes[1].textContent = `+${openList.childNodes[1].textContent.slice(1)}`;
    // openList.childNodes[1].textContent = openList.childNodes[1].textContent.replace('-', '+');
}

for (let i = 0; i < service_list.length; i++) {
    service_header[i].addEventListener('click', function () {

        /* 
            직전 열려있던 리스트와 현재 클릭한 리스트가 다르면 직전 리스트는 보이지 않게
            하고 현재 클릭한 리스트는 보이도록 설정.
            직전 열려있던 리스트와 현재 클릭한 리스트가 같은 경우에는 아래 로직이 실행될
            필요없이 그대로를 유지하면 되므로 조건문을 통해 아래 로직에 대한 실행 여부를
            결정하면 되지만, btn_collapseAll 버튼을 클릭하여 모든 리스트가 보이지 않게된
            상태 이후에 임의 리스트를 클릭하면 그 리스트는 보여야 하는데 조건 로직을
            설정하면 직전 리스트와 현재 클릭한 임의 리스트가 같은 경우 아래 로직이 실행
            될 수 없어 현재 클릭한 리스트가 보이지 않게 되므로 조건 로직 처리는 불가.
    
            또한 아래 set_openList 함수 호출로 직전 열려있던 리스트를 숨기고 문자열을 변경
            하는 로직과 아래 this 를 이용한 현재 클릭한 리스트에 대한 보임과 문자열 변경
            설정은 그 순서가 바뀌어서는 안됨에 주의.
            이는 직전 열려있던 리스트와 현재 클릭한 리스트가 다른 경우에는 그 순서가
            문제가 되지 않지만, 같은 경우 그 순서가 뒤바뀌면 현재 클릭한 리스트를 보이게
            한 후 다시 안보이게 하는 설정을 덮어쓰는 결과가 되므로 원하는 결과 도출 불가.
        */
        set_openList();

        this.parentNode.classList.remove('hidden');
        this.textContent = `-${this.textContent.slice(1)}`;
        // this.textContent = this.textContent.replace('+', '-');

        openList = this.parentNode;
    });
}

btn_collapseAll.addEventListener('click', () => {
    set_openList();
});

/*
  addEventListener 메서드의 2 번째 인수에 익명객체의 참조를 전달하여 addEventListener
  메서드 내에서 콜백 호출로 동작이 이루어지므로 아래와 같이 선언된 함수의 참조만 전달
  하는 것이 일반적.
*/
// btn_collapseAll.addEventListener('click', set_openList);