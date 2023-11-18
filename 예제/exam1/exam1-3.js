'use strict';

const service_container = document.querySelector('.service_container'),
    service_header = service_container.getElementsByClassName('service_header'),
    btn_collapseAll = service_container.querySelector('.btn_collapseAll');

let beforeHeader = service_header[0];

function closeBeforeHeader() {
    beforeHeader.parentNode.classList.add('hidden');
    beforeHeader.textContent = beforeHeader.textContent.replace('-', '+');
}

service_container.addEventListener('click', (e) => {
    const eventTarget = e.target;

    if (eventTarget.className === 'service_header') {
        closeBeforeHeader();
    
        eventTarget.parentNode.classList.remove('hidden');
        eventTarget.textContent = beforeHeader.textContent.replace('+', '-');
        beforeHeader = eventTarget;
    }
});

btn_collapseAll.addEventListener('click', closeBeforeHeader);