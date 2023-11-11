'use strict';


let result = 0;
let ar = new Array(200)

ar[0] = 1;
ar[1] = 1;

for (let i = 0; i < 198; i++) {
  ar[i+2] = ar[i]+num2[i+1];
}

for (let i = 0; i < 100; i++) {
    result += ar[i]
}