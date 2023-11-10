document.write('<h3>목록</h3>');

document.write('<ul>');
for (let i = 0; i < 5; i++) {
    document.write(`<li>${i + 1}번 목록</li>`);
}
document.write('</ul>');