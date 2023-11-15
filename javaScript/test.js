<<<<<<< HEAD
function add(n1) { // 매개변수 n1을 받는 add함수
    if (n1 < 0) { // 매개변수 n1이 0보다 작을때
  
      return/*반환값자리*/; // return = 함수 종료 / 값을 반환하는부분 X 
  
    }
    console.log(n1); // 매게변수 n1을 콘솔에 출력
  }


add(-12); // -12가 n1으로 올라갔을때 0보다 작음 -> return(함수종료)
add(12); // 12가 n1으로 올라갔을때 0보다 작지 않음 -> if문 건너뛰고 -> 콘솔에 n1출력 -> 12
add(8);
=======

//함수 실행

// 표현식
let num = 0;

let plus = function () {
    num +=5;
};
//선언문
let number = 0;
function plus2 (number2) {
    number2 += 5;
    number = number2;   
}

plus2 (number);
console.log(plus2(number));

>>>>>>> 33052f1d5ffea71649057cef557d7d8ba39b1ec7
