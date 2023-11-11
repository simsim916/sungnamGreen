'use strict';

let word1, word2;

alert('끝말잇기 Start');

while(1){
  out:
  while(1){
    while(1){
      word1 = prompt("처음 한글 세 글자 단어를 입력하세요!!^^")
      if(word1.length === 3) break;
      alert('세 글자 단어만 입력하세요~~')
    }
    alert('OK!! 게임시작~~')
    while(1){
      while(1){
        word2 = prompt(`한글 세 글자 단어를 입력하세요!! 종료하려면 "끝"이라고 입력하세요^^ ( 이전 단어 : ${word1} )`)
        if(word2 === '끝') break out;
        if(word2.length === 3) break;
        alert('세 글자 단어만 입력하세요~~')
      }
        if (word1.charAt(2) == word2.charAt(0)) {
        word1 = word2;
        alert('Ok!! Excellent!!')
      } else {
        alert('잘못된 단어입니다! 다시 입력해주세요!')
      }
    }
  }
  if(confirm("정말 종료하시겠습니까?")) break;
}