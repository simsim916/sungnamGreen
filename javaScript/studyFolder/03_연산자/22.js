/*
    < 원시 값과 불린값 변환 >

- 자바스크립트에서는 null, NaN, Undefined, ""(빈문자열), 0 등을 논리연산시  false로 변환하여 평가 가능하며,
  그 외의 값에 대해서는 true로 변환하여 평가 가능. 이에 대한 변환 확인은 not(!)연산자를 이용하여 확인 가능.
  원시 값에 대한 불린 값으로의 변환은 Boolean객체나 !!를 이용하여 직접 변환 가능.

*/

/* not(!)을 이용한 변환 확인. */
console.log(!5);
console.log(!0);
console.log(!"Tom");
console.log();

console.log(!null);
console.log(!NaN);
console.log(!undefined);
console.log(!"");
console.log("-----------")

/* Boolean객체를 이용한 불린값 변환. */
console.log(Boolean(5));
console.log(Boolean(0));
console.log(Boolean("Tom"));
console.log();

console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log("-----------");


/* !!을 이용한 불린값 변환. */
console.log(!!5);
console.log(!!0);
console.log(!!"Tom");
console.log();

console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!"");