'use strict';

let name, num = 0, score, total;

name = prompt("이름 : ")
num += +prompt("국어 정수 : "); 
num += +prompt("영어 점수 : "); 
num += +prompt("수학 점수 : "); 

total = num/3
if (total > 90){ 
    score = 'A'; total = num/3
} else if (total > 80) { 
    score = 'B' 
} else { score = 'C' } total = num/3
alert(`< 성적 > 
학생명 : ${name}, 학점 : ${score}, 평균 : ${total}`)