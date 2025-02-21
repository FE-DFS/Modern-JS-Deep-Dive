### Math

#### 1. Math 프로퍼티

- `Math.PI`
  원주율
  ```js
  Math.PI; // 3.141592653589793
  ```

#### 2. Math 메서드

- `Math.abs`
  절대값 반환
  ```js
  Math.abs(-1); // 1
  Math.abs(1); // 1
  Math.abs(""); // 0
  Math.abs([]); // 0
  Math.abs(null); // 0
  Math.abs({}); // NaN
  Math.abs(undefined); // NaN
  Math.abs(NaN); // NaN
  Math.abs("string"); // NaN
  Math.abs(); // NaN
  ```
- `Math.round`
  반올림
  ```js
  Math.round(1.4); // 1
  Math.round(1.5); // 2
  Math.round(-1.4); // -1
  Math.round(-1.5); // -2
  ```
- `Math.ceil`
  올림
  ```js
  Math.ceil(1.4); // 2
  Math.ceil(1.5); // 2
  Math.ceil(-1.4); // -1
  Math.ceil(-1.5); // -1
  ```
- `Math.floor`
  버림
  ```js
  Math.floor(1.4); // 1
  Math.floor(1.5); // 1
  Math.floor(-1.4); // -2
  Math.floor(-1.5); // -2
  ```
- `Math.sqrt`
  제곱근
  ```js
  Math.sqrt(1); // 1
  Math.sqrt(2); // 1.4142135623730951
  Math.sqrt(3); // 1.7320508075688772
  ```
- `Math.random`
  랜덤 값 반환
  ```js
  Math.random(); // 0 이상 1 미만의 랜덤 값
  ```
- `Math.max`
  최대값 반환
  ```js
  Math.max(1, 2, 3); // 3
  Math.max(null, [1, 2, 3]); // 3
  Math.max(...[1, 2, 3]); // 3
  ```
- `Math.min`
  최소값 반환
  ```js
  Math.min(1, 2, 3); // 1
  ```
- `Math.pow`
  제곱 반환
  ```js
  Math.pow(2, 3); // 8
  ```
