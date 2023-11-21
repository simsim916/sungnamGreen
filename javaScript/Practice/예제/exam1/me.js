'use strict';

let serviceHeader = document.querySelectorAll('.service_header');
let serviceBody = document.querySelectorAll('.service_body');
let serviceList = document.querySelectorAll('.service_list');
let serviceContainer = document.querySelector('.service_container');

let lastOJ = serviceList[0];
serviceContainer.addEventListener('click',(event)=>{
    let eventOJ = event.target.closest(".service_list")
    console.log(eventOJ.children[0]);
    console.log(eventOJ.children[0].innerText.substring(1));
    if (eventOJ.classList.contains('hidden')){
        lastOJ.classList.add('hidden');
        lastOJ.children[0].innerText = `- ${lastOJ.children[0].innerText.substring(1)}`;
        eventOJ.classList.remove('hidden');
        eventOJ.children[0].innerText = `- ${eventOJ.children[0].innerText.substring(1)}`;
    } else { 
        eventOJ.classList.add('hidden');
    }
    lastOJ = eventOJ;
});
