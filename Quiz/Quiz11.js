// 11.

const type = function (array) {

  let standardType = typeof (array[0]);

  for (let i = 0; i < array.length; i++) {
    if (standardType != typeof(array[i])) {
      return false
    } 
  }
  return true;
}

const arr = ["a", "b", 2];
console.log(type(arr));