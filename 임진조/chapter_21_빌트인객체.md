# 빌트인 객체

- 표준 빌트인 객체
  ECMAScript 사양에 정의된 객체(브라우저, node.js둘다 가능)
- 호스트 객체
  클라이언트 사이드: DOM, BOM, Canvas, XMLHttpRequest, fetch, requestAnimationFrame, SVG, Web Storage, Web Component, Web Worker
  node.js: 고유의 API를 호스트 객체로 전달
- 사용자 정의 객체
  사용자가 직접 정의

## 표준 빌트인 객체

```js
const strObj = new String('Lee'); // String {'Lee'}
console.log(typeof strObj); // object

const numObj = new Number(123); // Number {123}
console.log(typeof numObj); // object

const boolObj = new Boolean(true); // Boolean {true}
console.log(typeof boolObj); // object

const func = new Function('x', 'return x * x'); // f anonymous(x)
console.log(typeof func); // function

const arr = new Array(1, 2, 3); // 3 [1, 2, 3]
console.log(typeof strObj); // object

...
```

### 래퍼 객체

const str = 'hello'
str.name = 'Lee'
console.log(str.name) // undefined
str은 문자열을 값으로 가짐 -> 암묵적 생성된 래퍼 객체로 변경 -> 래퍼에 [[StringData]] 내부에 hello가 할당 -> 래퍼 객체에 name이 동적 추가 -> str은 내부슬롯에 있던 값을 가지고 다시 원시값으로 변경 -> .name에 들어간 Lee는 링크가 끊겼기 때문에 가비지 컬렉터가 처리

## 전역 객체

코드가 실행되기 이전 어떤 객체보다도 먼저 생성되는 특수 객체
최상위 객체이다
브라우저 환경: window
node 환경: global

전역 객체: 표준 빌트인 객체, 호스트 객체, var키워드 선언 변수를 프로퍼티로 가짐

### 빌트인 전역 프로퍼티

Infinity: 무한대를 나타냄
NaN: 숫자가 아님(Not-a-Number)
Undefiend: undefiend 원시값을 가짐
eval: 표현식이라면 평가하여 값을 생성, 표현식이 아닌 문이라면 런타엠에 실행
isFinite: 유한수를 체크
isNaN: NaN인지 검사
parseFloat: 부동 소숫점 숫자로 해석
parseInt: 정수로 해석
toString: 문자열로 해석
