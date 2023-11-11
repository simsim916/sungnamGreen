'use strict';

let row, column, max;
row = 10;
column = 10;
max = row*column;


for (let i = 0, v = 1, result ; i < row ; i++) {
    for (let j = 0 ; j < column ; j++) {
        for (let k = 0; k < String(max).length ; k++){
            for (let w = 0; w < String(max).length - String(v).length; w++){
                document.write(`0`);
            }
            document.write(`${v} `);
            v++;
        }
    }
    document.write(`<br>`);
}