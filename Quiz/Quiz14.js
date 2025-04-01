// 14.

const newArr = function (arr) {
  const arr0 = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') {
      arr0.push(arr[i]);
    }
  }
  return arr0;
}


const array = [1, 'apple', true, 'banana', 42, 'cherry'];
console.log(newArr(array));

