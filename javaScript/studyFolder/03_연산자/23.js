/*

    < and(&&)와 or(||) 연산 우선 순위 >

- and(&&)와 or(||)의 연산 우선 순위는 &&가 ||에 비해 상대적 우선 순위가 높음에 주의.

---------------------------------------------------------------------------------------------------------------

    < 단락 평가(Short-circuit evaluation) >                                                                                          

- 자바와 동일하게  and, or연산자의 논리적 특성에 따라  and의 경우 선행 피연산자가 false인 경우 후행 피연산자를
  평가하지 않고 바로 false를 반환. 즉, and는 어느 하나라도 거짓이면 거짓으로 평가되므로 선행 피연산자가 거짓이
  되면 후행 피연산자에 대한 평가 중단.   or연산자는 어느 하라라도 참이면 참이므로 선행 피연산자가  true인 경우
  후행 피연산자를 평가하지 않고 바로 true를 반환.

-----------------------------------------------------------------------------------------------------------------

    < 논리 연산자(and, or)의 피연산자에 불린값이 아닌 피연산자가 포함된 경우 >

- 불린값이 아닌 피연산자에 대해 불린값으로 변환 평가 후, 단락 평가의 성질이 적용되어 평가 및 다시
  본래 값으로 변환되어 반환 가능.

&&(Return first false) : 선행 피연산자가 false로 평가된 최초 값에 대한 본래의 값 반환 및 평간 중단을 하되, 모든
                         피연산자가 true로 평가되면 최종 피연산자 반환.

||(Return first true)  : 선행 피연산자가  true로 평가된 최초 값에 대한 본래의 값 반환 및 평가 중단을 하되, 모든
                         피연산자가 false로 평가되면 최종 피연산자 반환.

*/
console.log(false && false);         // and(그리고, ~ 이면서) : 둘다 참이면 참이다. &&
console.log(true && false);
console.log(false && true);
console.log(true && true);
console.log("----------------------")   
console.log(false || false);         // or(또는 , ~ 이거나 ) : 둘 중 하나만 참이면 참이다. ||
console.log(true || false);
console.log(false || true);
console.log(true || true);
console.log("----------------------")

console.log(1 && 1 || 1 && 0);      //  (1 && 1) || (1 && 0)와 동일.
console.log("----------------------")


0 && console.log('first false 1');          // 선행 피연산자가 false이므로 평가 중단.
1 && console.log('first false 2');          // 선행 피연산자가 true이므로 후행 피연산자 평가.
console.log();

0 || console.log('first true 1');           // 선행 피연산자가 false이므로 후행 피연산자 평가.
1 || console.log('first true 2');           // 선행 피연산자가 true이므로 후행 피연산자 평가 중단.
console.log("----------------------")


console.log(null && 1 && 'string');
console.log(1 && null && 'string');
console.log(1 && 'string' && NaN);
console.log(1 && 'string' && 2);
console.log();

console.log(1 || undefined || '');
console.log(null || 2 || 'string');
console.log('' || NaN || 3);
console.log('' || NaN || undefined);