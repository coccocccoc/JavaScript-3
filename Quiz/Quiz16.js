// 16.

const mean = function (name, subject) {
  let total = 0;
  
  for (const value of name) {
    total = value.math + total;
  }
  console.log(total);
}

const students = [
  { name: "둘리", math: 90, english: 85 },
  { name: '또치', math: 80, english: 95 },
  { name: "도우너", math: 70, english: 75 }
];

for (const value of students) {
  console.log(value.math);
}

console.log(mean(students, math));