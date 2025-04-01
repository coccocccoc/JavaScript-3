const person = {
  age: 30,
  name: "둘리",
  address: "서울"
};

// 객체의 프로퍼티를 꺼낼 때는 도트(.) 또는 대괄호를 사용
// 도트연산자를 사용해 이름, 나이, 주소 변경
person.age = 10;
person.name = "또치";
person.address = "인천";
// 대괄호를 사용하여 이름, 나이, 주소 변경
// person["name"] = "또치";

console.log(person.age);
console.log(person.name);
console.log(person.address);


const product = {
  name: "노트북",
  price: 1500000,
  brand: "삼성"
};

product.price = 2000000;
product.brand = "LG";

console.log(product.name);
console.log(product.price);
console.log(product.brand);

