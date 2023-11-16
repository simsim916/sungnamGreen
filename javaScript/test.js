
(()=> {
  console.log(this)
  console.log('5분간 움직이지 않았습니다. 곧 로그아웃됩니다.');
})();

let num1 = 5, num2 = 7;

function add(){
  num1 += num2
  console.log(`${this}`)
}

add();

console.log(window);
