## 클로저

클로저는 함수를 일급 객체로 취급하는 함수형 프로그래밍 언어에서 사용되는 중요한 특성이다.
"클로저는 함수와 그함수가 선언된 렉시컬 환경과의 조합니다."

### 렉시컬 스코프

렉시컬 스코프(정적 스코프): 함수를 어디에 정의했는지에 따라 상위 스코프를 결정한다.

```js
const x = 1;

function foo() {
  const x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo();
bar();
```

bar와 foo함수의 상위 스코프는 전역 스코프로 같다 따라서 전역 변수 x = 1을 보고 있다.
이때 스코프는 실행 컨텍스트의 렉시컬 환경이다.
스코프 체인에 의해 외부 스코프에 접근이 가능하다.
스코프 체인: 상위 스코프를 참조할 수 있는 Outer Lexical Environment Reference를 통해 상위 스코프에 접근이 가능하다.

함수가 평가되는 시점에 함수가 선언된 위치에 의해 결정된다.

### 함수 객체의 내부 슬롯 [[Environment]]

함수 정의가 평가되어 함수 객체를 생성할 때 자신이 정의된 환경에 의해 결정된 상위 스코프의 참조를 함수 객체 자신의 내부 슬롯 [[Environment]]에 저장한다.

"클로저는 중첩 함수가 상위 스코프의 식별자를 참조하고 있고 중첩 함수가 외부 함수보다 더 오래 유지하는 경우로 한정한다."

### 클로저의 활용

클로저는 상태를 안전하게 변경 유지하기 위해 사용한다.

```js
// 이 예제는 num이 전역 변수라 상태 관리가 어려움
let num = 0;
const increase = function () {
  return ++num;
};

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3
```

```js
// num을 내부로 이동시켰지만 동작에 문제가 생김
const increase = function () {
  let num = 0;
  return ++num;
};

console.log(increase()); // 1
console.log(increase()); // 1
console.log(increase()); // 1
```

```js
// 클로저를 활용(즉시 실행 함수를 사용한 이유는 클로저를 생성하기 위함이기 때문에 함수 선언과 동시에 실행하고 소멸시킨 후 동작만 가지기 위함)
const increase = (function () {
  let num = 0;
  return function () {
    return ++num;
  };
})();

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3
```

```js
const counter = (function () {
    let num = 0;
    return {
        increase() {
            return ++num;
        }
        decrease() {
            return num > 0 ? --num : 0;
        }
    }
}())

console.log(counter.increase()) // 1
console.log(counter.decrease()) // 0
```
