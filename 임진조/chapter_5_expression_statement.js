ㅇ;
/**
 * JavaScript 표현식과 문(Expression and Statement)
 */

/**
 * 1. 값(Value)과 평가(Evaluation)
 * - 값: 식이 평가되어 생성된 결과
 * - 평가: 식을 해석하여 값을 생성하거나 참조하는 과정
 *
 * 중요: 모든 값은 메모리에 비트(2진수)로 저장됨
 */

// 평가 예제
10 + 20; // 30
"A".charCodeAt(); // 65 (문자 'A'의 ASCII 코드)
String.fromCharCode(65); // 'A' (65를 문자로 해석)

/**
 * 2. 리터럴(Literal)
 * - 정의: 사람이 이해할 수 있는 문자/기호로 값을 표현하는 방식
 * - 특징: 런타임에 평가되어 값을 생성
 */

// 다양한 리터럴 예제
42; // 숫자 리터럴
("Hello"); // 문자열 리터럴
true; // 불리언 리터럴
null; // null 리터럴
undefined; // undefined 리터럴
{
  key: "value";
} // 객체 리터럴
[1, 2, 3] / // 배열 리터럴
  test /
  gi; // 정규표현식 리터럴

/**
 * 3. 표현식(Expression)
 * - 정의: 값으로 평가될 수 있는 모든 문
 * - 특징: 표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조
 */

// 다양한 표현식 예제
// 1) 리터럴 표현식
100;
("Hello");

// 2) 식별자 표현식
let x = 100;
x; // 식별자 표현식 (100으로 평가됨)

// 3) 연산자 표현식
10 + 20; // 산술 연산자
x = 1; // 할당 연산자
x > 0; // 비교 연산자

// 4) 함수/메소드 호출 표현식
console.log("Hello");
Math.max(1, 2, 3);

/**
 * 4. 문(Statement)
 * - 정의: 프로그램의 최소 실행 단위
 * - 구성: 여러 토큰(token)으로 구성
 * - 토큰 예: 키워드, 식별자, 연산자, 리터럴, 세미콜론(;) 등
 */

// 다양한 문의 예제
// 1) 선언문
let number;
function greeting() {}

// 2) 할당문
number = 100;

// 3) 조건문
if (number > 0) {
  console.log("양수");
}

// 4) 반복문
for (let i = 0; i < 3; i++) {
  console.log(i);
}

/**
 * 5. 표현식인 문 vs 표현식이 아닌 문
 * - 표현식인 문: 값으로 평가될 수 있는 문
 * - 표현식이 아닌 문: 값으로 평가될 수 없는 문
 */

// 표현식인 문
x = 100; // 할당문은 값으로 평가됨 (100)
x + 50; // 식이 값으로 평가됨
foo(); // 함수 호출은 반환값으로 평가됨

// 표현식이 아닌 문
var x1; // 변수 선언문 (undefined 출력)
if (true) {
} // 조건문 (undefined 출력)

// 크롬 개발자 도구에서 실행해보기
// 표현식이 아닌 문을 실행하면 undefined 출력
var test; // undefined
if (true) {
  console.log("Hello");
} // undefined

/**
 * 6. 세미콜론(;)
 * - 원칙: 문의 종료를 나타냄
 * - 예외: 코드 블록({}) 뒤에는 세미콜론을 붙이지 않음
 */

// 세미콜론 사용 예제
let name = "John"; // 세미콜론 필요
const greeting = function () {
  return "Hello";
}; // 코드 블록 뒤에는 세미콜론 불필요

if (name === "John") {
  console.log("Hello John");
} // 코드 블록 뒤에는 세미콜론 불필요
