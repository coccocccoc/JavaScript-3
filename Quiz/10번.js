// 10번

// 알고리즘 문제

// 숫자 배열
const array = [-1, 5, 10, -3];
// 이 중에서 가장 큰 값 찾기
// 순서도 또는 주석을 사용하여 로직 정리!
// -1과 5를 비교 => max: 5
// 5와 10을 비교 => max: 10
// 10과 -3을 비교 => max: 10

// arr[0]과 arr[1]을 비교
// max와 arr[2]를 비교
// max와 arr[3]을 비교
// for-of문을 사용하여 배열 안에 값을 하나씩 꺼내기

// 가장 큰 값을 저장할 변수
let max = array[0]; // 배열의 첫번째 요소로 초기화
for (const value of array) {
  // 배열의 요소들과 max를 비교
  if (value > max) {
    max = value; // 더 큰 값이 있으면 max를 교체
  }
}
// 모든 요소를 비교한 후에 제일 큰 값을 찾아서 리턴
console.log(max); // 10


// 숫자 배열을 입력받아 가장 큰 값을 구하는 함수
// 매개변수: 배열
// 리턴값: 가장 큰 값
const findMax = function (arr) {
  let max = arr[0]; 
  for (const value of arr) {
    if (value > max) {
      max = value;
    }
  }
  return max;
}

console.log(findMax(array));