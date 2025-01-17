/**
 * 데이터 타입
 *
 * 원시타입: 숫자(number), 문자열(string), 불리언(boolean), undefined, null, 심벌
 * 객체타입: 객체, 함수, 배열
 * 중요: 데이터 타입일 필요한 이유
 * 1. 값을 저장할 때 확보해야 하는 메모리 공간의 크기를 결정하기 위해
 * 2. 값을 참조할 때 한번에 읽어 들여야 할 메모리 공간의 크기를 결정하기 위해
 * 3. 메모리에서 읽어들인 2진수를 어떻게 해석할지 결정하기 위해
 */

/**
 * 숫자 타입 number배정밀도 64비트 부동소주점 형식을 따름 -> 값을 참조하면 10진수로 해석
 * 특별한 세가지 값 Infinity, -Infinity, NaN
 */
var integer = 10;
var double = 10.12;
var negative = -20;

/**
 * 문자열 타입
 * 문자열은 변경불가능한 값(immutable value)이기 때문에 한번 생성된 문자열은 변경할 수 없음
 */

var string;
string = "문자열";
string = "문자열";
string = `문자열`; //ES6 백틱표기법

/**
 * 템플릿 리터럴
 * 멀리라인 문자열, 표현식 삽입, 태그드 템플릿 등 유용한 문자열 처리 기능을 가짐
 */

// 라인피드(\n): 커서위치 고정 한칸내림
// 캐리지 리턴(\r): 커서만 앞으로 당김

/**
 * 멀리라인
 * <ul>
 *  <li>hi</li>
 * </ul>
 */
var template = "<ul>\n\t<li>hi</li>\n</ul>";
var template = ` <ul>
    <li>hi</li>
</ul>`;

// 표현식 삽입
var first = "hi";
console.log(`asdf ${first + first}`); // asdf hihi

// 불리언
var foo = true;

//undefined 타입 -> 변수 선언 후 값을 할당하지 않으면 자바스크립트엔진이 자동으로 삽입
// 변수 초기화에 undefined를 할당하지 않도록 하자 삽입할 데이터가 없을 경우 null을 사용
var foo;
console.log(foo); // undefined

// null 타입 -> 의도적으로 없음을 표기
var foo = null;

/**
 * 심벌 타입(ES6)
 * 다른 값과 중복되지 않는 유일한 값
 * 주로 객체의 프로퍼티 키를 생성하기위해 사용
 */
var key = Symbol("key");
console.log(typeof key); // symbol
var obj = {};

obj[key] = "value";
console.log(obj[key]); // value

/**
 * 동적 타이핑
 * 자바스크립트는 동적타입 언어이다.
 * 자바스크립트 변수는 선언이 아닌 할당에 의해 타입을 추론한다. 또한 재할당에 의해 언제든지 타입이 바뀔 수 있다
 * 대표적 동적 타입언어: 파이썬, PHP, 루비, 리스프, 펄
 */

var foo;
console.log(typeof foo); // undefined
foo = 3;
console.log(typeof foo); // number
foo = "Hello";
console.log(typeof foo); // string
foo = true;
console.log(typeof foo); // boolean ...
