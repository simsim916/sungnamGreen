/* 
    < 클로저의 장점 >

    전역변수를 사용하지 않고 필요한 시점까지 지역변수를 유지시켜 활용하되
    더 이상 지역변수가 필요하지 않으면 할당을 해제(null 할당)함으로써
    점유 메모리에 대한 유연성 확보.
*/

function sum() {
    let tot = 0;
  
    return n => {
      if (isNaN(n)) return tot;   // 실인수가 전달되지 않거나(n:undifined) 문자열과 같은
      //                          // 잘못된 데이터를 전달하여 호출하는 경우 바로 전누적합을
      //                          // 반환하도록 방어코드 설정.
      tot += n;
  
      return tot;
    };
  }
  
  let inputSum = sum();
  
  for (let i = 1; i <= 100; i++) {
    inputSum(i);
  }
  
  console.log(inputSum());
  console.log(inputSum('a'));
  console.log(inputSum(5));
  
  inputSum = null;            // 기존 렉시컬환경 객체 삭제.
  
  console.log('===================================')
  
  // ======================================================================
  
  inputSum = sum();           // 새로운 렉시컬환경 객체 생성.
  
  for (let i = 1; i <= 10; i++) {
    inputSum(i);
  }
  
  console.log(inputSum());
  
  inputSum = null;