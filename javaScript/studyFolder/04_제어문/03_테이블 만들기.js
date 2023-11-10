'use strict';

const data = [
    [1, 2, 3, 4],
    ['a', 'b', 'c', 'd'],
    ['가', '나', '다', '라'],
    ['I', 'II', 'III', 'IV']
];

document.write('<table>');

for (let i = 0; i < 4; i++) {
    document.write('<tr>');

    for (let j = 0; j < 4; j++) {
        document.write(`<td>${data[i][j]}</td>`);
    }

    document.write('</tr>');
}

document.write('</table>');