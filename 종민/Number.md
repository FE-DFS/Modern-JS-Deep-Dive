# Number

표준 빌트인 객체인 Number는 원시 타입 인 숫자를 다룰 때 유용한 프로퍼티와 메서드를 제공한다.

## 프로퍼티

- Number.EPSILON: 부동소수점으로 인해 발생하는 오차를 해결하기 위해 사용
- Number.MAX_VALUE: 가장 큰 양수
- Number.MIN_VALUE: 가장 작은 양수
- Number.MAX_SAFE_INTEGER: 안전하게 표현할 수 있는 가장 큰 정수
- Number.MIN_SAFE_INTEGER: 안전하게 표현할 수 있는 가장 작은 정수
- Number.POSITIVE_INFINITY: Infinity
- Number.NEGATIVE_INFINITY: -Infinity
- Number.NaN: NAN

## 메서드

빌트인 메서드와 달리 전달받은 인수를 타입변환하지 않는다.

- Number.isFinite: 유한수인지 검사, 빌트인 전역함수 isFinite와 달리 전달받은 인수를 타입 변환하지 않는다. 숫자가 아닌 인수는 모두 false
- Number.isInteger: 정수인지 검사
- Number.isNaN: NaN인지 검사

- Number.prototype.toFixed: 반올림하여 문자열로 반환,

  ```js // 소수점 이하 반올림. 인수를 생략하면 기본값 0이 지정된다.
  (12345.6789).toFixed(); // - "12346"
  // 소수점 이하 1자릿수 유효, 나머지 반올림
  (12345.6789).toFixed(l); // - "12345.7"
  ```

- Number.prototype.toString
  ```js
  // 인수를 생략하면 10잔수 문자열을 반환한다.
  (10).toString(); // — "10"
  // 2잔수 문자열을 반환한다.
  (16).toString(2); // — "10
  ```
