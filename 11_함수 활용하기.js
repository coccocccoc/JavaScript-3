// 매출의 부가세 계산하기

let price1 = 100000; // 매출
let vat1 = 0.1; // 부가세 10%
let tax1 = price1 * vat1; // 부가세 계산
console.log(tax1);

let price2 = 240000; // 매출
let vat2 = 0.1;
let tax2 = price2 * vat2; // 부가세
console.log(vat2);

// 코드 중복!
// 다른 부분? 매출
//  => 함수

// 매개변수: 매출
const calc = function (price) {
  let vat = 0.1; // 부가세 10%
  let tax = price * vat;
  console.log(tax);
}

// 매출액은 함수를 호출할 때 결정
calc(100000);
calc(240000);