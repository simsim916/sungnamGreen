'use strict';

let body = document.getElementsByTagName('body');
let img = body[0].getElementsByTagName('img');
let div = body[0].getElementsByClassName('nation_container');
let btn = div[0].getElementsByTagName('div');

let ar = [
    'https://img.freepik.com/free-vector/mountains-cleft-view-from-bottom-night-scenery-landscape-with-high-rocks-full-moon-with-stars-glowing-peaks_107791-5585.jpg?size=626&ext=jpg&ga=GA1.1.1134619638.1700008002',
    'https://img.freepik.com/free-vector/arizona-night-desert-landscape-natural-wild-west-background-with-coyote-pack-silhouettes-run-through-cacti-rocks-cloudy-sky-with-full-moon-shining-game-scene-cartoon-vector-illustration_107791-8446.jpg?size=626&ext=jpg&ga=GA1.1.1134619638.1700008002',
    'https://img.freepik.com/free-vector/tropical-landscape-with-car-with-luggage-sunset_107791-9527.jpg?size=626&ext=jpg&ga=GA1.1.1134619638.1700008002',
    'https://img.freepik.com/free-vector/nature-landscape-with-forest-mountains-sun_107791-9359.jpg?size=626&ext=jpg&ga=GA1.1.1134619638.1700008002',
    'https://img.freepik.com/free-vector/sunset-african-savannah-landscape-wild-nature_107791-9212.jpg?size=626&ext=jpg&ga=GA1.1.1134619638.1700008002',
    'https://img.freepik.com/free-vector/beach-wedding-arch-decoration-seaside_107791-5546.jpg?size=626&ext=jpg&ga=GA1.1.1134619638.1700008002'
];

let divMaker = '';


for (let i = 0 ; i < ar.length ; i++) {
    divMaker += `<div>${i+1}</div>`;
}

div[0].innerHTML = divMaker;

let num = 1;
function numCall() {
    for(let i = 0 ; i < ar.length ; i++){
        btn[i].style.backgroundColor="white";
    }
    num = +this.innerText - 1;
    btn[num].style.backgroundColor="grey";
    img[0].setAttribute('src',`${ar[num]}`)
};

for (let i = 0 ; i < ar.length ; i++) {
    btn[i].addEventListener('click', numCall);
}

let add = function () {
    num++;
    if (num >= ar.length) num = 0;
    for(let i = 0 ; i < ar.length ; i++){
        btn[i].style.backgroundColor="white";
    }
    btn[num].style.backgroundColor="grey";
    img[0].setAttribute('src',`${ar[num]}`)
};

setInterval( add , 1000);   