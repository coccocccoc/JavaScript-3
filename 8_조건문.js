// 조건문 (if와 switch)

let year = 2024;

year = 2026;

// if문
// year이 2025라면 "정답입니다"를 출력
if(year == 2025) { // 조건문
  console.log("정답입니다!"); // 실행코드
}
// if문은 다양한 형태로 작성할 수 있다

// if ~ else (조건을 만족했을때, 그렇지 않을때를 모두 표현)
// 완전한 구조 완성 => 빈칸 채우기
// 조건을 만족하면 if블록 실행
// 만족하지 못하면 else블록 실행
if(year == 2025){
  console.log("정답입니다!")
} else {
  console.log("오답입니다.")
}

// if ~ else if ~ else
// 하나의 상황에서 경우의 수가 여러가지 일 때
if (year == 2025) {
  console.log("year은 2025와 같습니다");
} else if (year < 2025) {
  console.log("year은 2025보다 작습니다");
} else {
  console.log("year은 2025보다 큽니다");
}

// 버스 프로그램
// 승객의 나이에 따라 요금을 지불
const age = 12; // 승객의 나이
let busFare = 0; // 버스 요금

// 7살 이하면 요금은 0원
// 8~13살 사이이면 요금은 450원
// 14~19살 사이이면 요금은 720원
// 20~70살 사이이면 요금은 1200원
// 70살 이상이면 요금은 0원
if (age <= 7 || age >= 70) {
  busFare =  busFare + 0;
} else if (age >= 8 && age <= 13) {
  busFare = busFare + 450;
} else if (age >= 14 && age <= 19) {
  busFare = busFare + 720;
} else if (age >= 20 && age < 70) {
  busFare = busFare + 1200;
} 

// switch문
// if 문은 조건이 포괄적일 때 사용
// switch문은 조건이 값으로 떨어질 때 사용

// 선수의 등수에 따라 메달을 수여
const rank = 5; // 선수의 등수

switch (rank) { // 조건이 되는 변수
  case 1: // 비교할 값
    console.log("금메달 입니다."); // 수행할 코드
    break; // break가 없으면 switch문을 빠져나올 수 없음
  case 2: // rank == 2
    console.log("은메달 입니다");
    break; //case문이 끝나기 전에 break를 꼭 작성할 것!
  case 3: // rank == 3
    console.log("동메달 입니다");
    break;
  default: // 조건을 만족하는 case가 없으면 마지막으로 실행됨
    console.log('메달이 없습니다');
}