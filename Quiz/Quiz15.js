// 15.

const factorial = function (x) {
  let a = x;
  for (let i = x-1; i >= 1; i--){
    a = a*i
  }
  return a;
}

console.log(factorial(5));