'use strict';

let str = '@ Javascript &';

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);                 // 문자열에 대한 배열 인덱싱 제공.
}
console.log('--------');

console.log('@ Javascript &'[0]);             // 문자열 자체에 대한 배열 인덱싱도 가능.
console.log('@ Javascript &'[str.length - 1]);
