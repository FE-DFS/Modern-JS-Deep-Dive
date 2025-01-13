/**
 * JavaScript 기본 개념 정리
 *
 * 1. JavaScript 코드 실행 과정
 * - 평가(evaluation): 코드 실행 전 기호와 식의 의미를 해석
 * - 리터럴(literal): 소스 코드 안에서 직접 만든 고정된 값
 * - 연산자(operator): 값에 대한 연산을 수행하는 기호
 * - 표현식(expression): 값으로 평가될 수 있는 코드
 * - 파싱(parsing): 코드의 의미를 해석하는 과정
 */

/**
 * 2. 메모리와 변수의 이해
 *
 * 예시) 10 + 20의 실행 과정
 * 1) 피연산자 10, 20을 메모리에 저장
 * 2) CPU가 연산 수행
 * 3) 결과 30을 새로운 메모리 주소에 저장
 *
 * 주의: JavaScript에서는 메모리 주소 직접 조작 불가
 * 이유: 시스템 안정성 보장을 위해
 * 해결책: 변수를 통한 메모리 공간 식별
 */

/**
 * 3. 식별자(Identifier)
 * - 정의: 값을 구별하기 위한 고유한 이름
 * - 특징: 값이 아닌 메모리 주소를 참조
 * - 종류: 변수, 함수, 클래스 등
 */

// 식별자 예제
var userId = 1; // 단순 값
var userName = "Lee"; // 문자열
var user = { id: 1, name: "Lee" }; // 객체
var users = [
  // 배열
  { id: 1, name: "Lee" },
  { id: 2, name: "Kim" },
];

/**
 * 4. 변수 호이스팅(Variable Hoisting)
 * - 정의: 변수 선언문이 코드의 선두로 끌어올려진 것처럼 동작하는 현상
 * - 발생 시점: 코드 실행 전 평가 과정에서 발생
 * - 영향: 모든 식별자(변수, 함수 등)에 적용
 */

// 호이스팅 예제
console.log(score); // undefined (에러가 발생하지 않음)
var score; // 변수 선언문

// 호이스팅이 발생하는 더 복잡한 예제
console.log(complexScore); // undefined
var complexScore = 100;
console.log(complexScore); // 100

/**
 * 5. 값의 할당과 재할당
 * - 변수 선언: 메모리 공간 확보 및 식별자와 연결
 * - 값 할당: 메모리 공간에 값을 저장
 *
 * 중요: 할당 시 새로운 메모리 공간이 생성됨
 */

// 값 할당 예제
var score1; // 선언 (undefined로 자동 초기화)
score1 = 80; // 할당 (새로운 메모리 공간에 80 저장)
var score2 = 80; // 선언과 할당을 동시에

// 재할당 예제
var count = 80; // 최초 할당
count = 90; // 재할당 (새로운 메모리 공간에 90 저장)
console.log(count); // 90

// 메모리 동작 시각화 예제
var x = 1;
var y = x;
x = 2;
console.log(x); // 2
console.log(y); // 1 (y는 여전히 최초의 1을 가리킴)
