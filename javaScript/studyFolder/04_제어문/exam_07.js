'use strict';

let row = 4;
let v = 0;
for (let i = 1 ; i <= row; i++) {
  for (let j = 1; j <= row+i-1 ; j++) {
    if ( j >= row-i+1 ) v++;
  }
}
console.log(v);