/**
 * 연산자(operator): 산술, 할당, 비교, 논리, 타입, 지수 연산 등을 수행해 하나의 값을 만듦
 * 피연산자(operand): 연산의 대상
 */

// 산술 연산자
console.log(5 * 4); // 20

// 할당 연산자
let color = "red";

// 비교 연산자
console.log(3 > 5); // false

// 논리 연산자
console.log(true && false); // false

// 타입 연산자
console.log(typeof "Hi"); // string

/**
 * 산술 연산자
 * +, -, *, /, %
 * 단항 산술 연산자: ++, --, +, -
 */

let x = 1;
let result;

// 선할당 후증가
result = x++;
console.log(result, x); // 1, 2

// 선증가 후할당
result = ++x;
console.log(result, x); // 3, 3

// 단항 연산자
console.log(-10); // -10
console.log(-"10"); // -10 (암묵적 타입 변환)
console.log(-true); // -1
console.log(-"Hello"); // NaN

/**
 * 할당 연산자 (값으로 평가 -> 표현식)
 */
let y;
y = 10; // 10
y += 5; // y = y + 5
y -= 5; // y = y - 5
y *= 5; // y = y * 5
y /= 5; // y = y / 5
y %= 5; // y = y % 5

// 연쇄 할당
let a, b, c;
a = b = c = 0;

/**
 * 비교 연산자
 */
console.log(5 == 5); // true
console.log(5 == "5"); // true (암묵적 타입 변환)

// 주의할 비교 사례
console.log("0" == ""); // false
console.log(0 == ""); // true
console.log(false == "false"); // false

// 일치 연산자
console.log(5 === 5); // true
console.log(5 === "5"); // false

/**
 * 삼항 연산자
 */
let score = 80;
let passResult = score >= 60 ? "pass" : "fail";
console.log(passResult); // pass

/**
 * 지수 연산자
 * 좌항의 피연산자를 밑, 우항의 피연산자를 지수로 거듭제곱
 */
console.log(2 ** 2); // 4
console.log(2 ** 2.5); // 5.65685424949238
console.log(2 ** -2); // 0.25

/**
 * 연산자 우선순위와 결합 순서
 * 1. () (괄호)
 * 2. ++, -- (단항 연산자)
 * 3. *, /, % (곱셈/나눗셈/나머지)
 * 4. +, - (덧셈/뺄셈)
 * 5. 비교 연산자 (<, <=, >, >=)
 * 6. 동등 연산자 (==, ===)
 * 7. 논리 연산자 (&&, ||)
 * 8. 삼항 연산자 (?:)
 * 9. 할당 연산자 (=, +=, -=, *=, /=, %=)
 */
