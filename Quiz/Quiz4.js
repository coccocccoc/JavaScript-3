// 4-1.
let x = 14;

if (x > 10 && x < 20) {
  console.log(x);
}

// 4-2.
let str = 'abcdefg';

if (str.length > 5) {
  console.log(str);
}

// 4-3.
const person = {
  age: 15,
  gender: 'M',
  name: '둘리',
  address: '서울'
};

if (person.age < 20 && person.gender == 'M') {
  console.log('남학생입니다')
};

// 4-4.
const arr = [5, 12, 8, 130, 44];

if (arr.includes(10)) {
  console.log('배열에 10이 있습니다')
} else {
  console.log("배열에 10이 없습니다");
}