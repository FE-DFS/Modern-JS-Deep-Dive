# strict mode

```js
function foo() {
  x = 10;
}
foo();

console.log(x); // 암묵적 전역을 만들어 전역 객체에 x를 할당
```

strict mod를 추가하면 에러가 뜬다

```js
"use strict";
function foo() {
  x = 10; // ReferenceError: x is not defined
}
foo();

console.log(x);
```

strict 모드는 스크립트 단위로 실행
전역에 strict mod를 사용하는 것은 피하자(라이브러리가 non-strict일 수 있음)
즉시 실행 함수로 감싼 단위로 strict mode를 사용하자

```js
(function () {
  var let = 10;
  function foo() {
    "use strict";
    let = 20; // SyntaxError: Unexpected strict mode reserved word
  }
  foo();
})();
```
