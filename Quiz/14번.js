// 14번

// 배열 생성
const array = [1, "apple", true, "banana", 42, "cherry"]

// 새로운 배열
const newArray = [];

// 배열을 순회하며 string 타입의 요소 찾기
for (const value of array){
  const type = typeof value;
  // 배열 요소의 타입이 string이면 새 배열에 추가
  if (type == 'string') {
    newArray.push(value);
  }
}

// for문이 끝났으면 새 배열 확인
console.log(array);
console.log(newArray);