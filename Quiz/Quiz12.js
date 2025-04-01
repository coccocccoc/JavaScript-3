// 12.

const find = function (arr, char) {
  if (arr.includes(char)) {
    return true;
  } else {
    return false;
  }
};

const arr1 = ['apple', 'banana', 'cherry'];
console.log(find(arr1, "banana"));