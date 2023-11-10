'use strict';

const ar = [1, 2, 3, 4, 5];  // 

ar[0] = 10;

// console.log(ar[0]);
// console.log(ar[1]);
// console.log(ar[2]);
// console.log(ar[3]);
// console.log(ar[4]);

for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}
console.log('=================');

for (let i = 0; i < ar.length; i++) {
    ar[i] += 5;
}
console.log('=================');

for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}
console.log('=================');