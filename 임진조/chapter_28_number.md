### 표준 빌트인 객체 number

#### 1. number 생성자 함수

```js
const numOjb = new Number();
console.log(numOjb); // Number {[[PrimitiveValue]]: 0}

const numOjb2 = new Number(123);
console.log(numOjb2); // Number {[[PrimitiveValue]]: 123}

const numOjb3 = new Number("hello");
console.log(numOjb3); // Number {[[PrimitiveValue]]: NaN}

// 문자열을 숫자로 타입 변환
Number("0"); // 0
Number("-123"); // -123
Number("10.53"); // 10.53
Number("Hello"); // NaN

// 불리언 값을 숫자로 타입 변환
Number(true); // 1
Number(false); // 0
```

ES5 기준 [[NumberData]] 내부 슬롯을 가리킨다.

#### 2. Number 프로퍼티

부동소수점을 표현하기 위해 널리 쓰이는 IEEE 754는 2진법으로 변환 시 무한소수가 되어 미세 오차 발생

```js
0.1 + 0.2; // 0.30000000000000004
0.1 + 0.2 === 0.3; // false
```

- `Number.EPSILON`
  이러한 문제를 해결하기 위해 `Number.EPSILON` 프로퍼티가 제공된다.

```js
function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

isEqual(0.1 + 0.2, 0.3); // true
```

- `Number.MAX_VALUE`
  자바스크립트에서 표현할 수 있는 가장 큰 수
- `Number.MIN_VALUE`
  자바스크립트에서 표현할 수 있는 가장 작은 수
- `Number.MAX_SAFE_INTEGER`
  자바스크립트에서 안전하게 표현할 수 있는 가장 큰 정수
- `Number.MIN_SAFE_INTEGER`
  자바스크립트에서 안전하게 표현할 수 있는 가장 작은 정수
- `Number.POSITIVE_INFINITY`
  양의 무한대
- `Number.NEGATIVE_INFINITY`
  음의 무한대

#### 3. Number 메서드

- `Number.isFinite`
  유한수 여부 확인(숫자 타입만 true, 무한수, NaN, undefined는 false)
- `Number.isInteger`
  정수 여부 확인(정수 true, 실수 false)
- `Number.isNaN`
  NaN 여부 확인(숫자 타입만 true, 무한수, undefined는 false)
- `Number.isSafeInteger`
  안전한 정수 여부 확인(정수 true, 실수 false)
- `Number.parseFloat`
  문자열을 부동소수점으로 변환
- `Number.prototype.toExponential`
  숫자를 지수 표기법으로 변환
- `Number.prototype.toFixed`
  숫자를 반올림하여 문자열로 반환
- `Number.prototype.toPrecision`
  숫자를 지정된 자리수로 반올림하여 문자열로 반환
- `Number.prototype.toString`
  숫자를 문자열로 변환
