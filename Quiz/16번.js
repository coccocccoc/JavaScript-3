// 16번
// 학생 목록을 입력받아, 특정 과목의 평균점수를 구하는 함수 만들기


// 학생 배열을 입력받아 특정 과목의 평균점수를 구하는 함수
// 매개변수: 학생배열, 과목명
// 리턴값: 특정 과목의 평균점수
const calcScore = function (arr, subject) {
  // 총 점수를 저장할 변수
  let total = 0;
  // 학생들의 수학점수만 누적
  // 배열 안에 있는 학생 정보 하나씩 꺼내기
  for (const student of arr) {
    // 학생 정보에서 수학점수만 꺼내기
    // 객체에서 key를 사용하여 점수 꺼내기!
    // 1. object.key
    // 2. object["key"]
    // subject 변수가 값으로 치환됨 => student["math"]
    total = total + student[subject];
  }
  // 평균점수 계산 (총 점수 / 학생의 수)
  return total / students.length
}


// 3명의 학생 정보를 담고있는 배열 생성
const students = [
  { name: "둘리", math: 90, english: 85 },
  { name: "또치", math: 80, english: 95 },
  { name: "도우너", math: 70, english: 75 },
];
// 배열과 과목명을 전달하여 함수 호출
const avg = calcScore(students, "math");
console.log(avg); // 수학 평균점수: 80

const avg2 = calcScore(students, "english");
console.log(avg2); // 영어 평균점수: 85