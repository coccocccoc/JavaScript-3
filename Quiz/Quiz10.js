// 10.


const func = function (array) {

  let max = array[0];
  for (let i = 0; i < array.length; i++){
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

const arr = [-1, 5, 10, -3];
console.log(func(arr));

