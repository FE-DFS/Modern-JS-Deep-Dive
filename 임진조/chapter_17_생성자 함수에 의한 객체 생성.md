# 17 생성자 함수에 의한 객체 생성

생성자 함수: new 연산자와 함께 호출하여 객체(인스턴스) 생성
인스턴스: 생성된 객체

```js
const person = new Object();
person.name = "Lee";
person.sayHello = function () {
  console.log("Hi! My name is " + this.name);
};
console.log(person); // {name: 'Lee', sayHello: f}
person.sayHello(); // Hi! My name is Lee
```

객체 리터럴에 의한 생성의 문제
구조는 동일하나 값하나가 다를 경우 여러개 선언해야 한다.

```js
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};

const circle1 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};
```

생성자 함수를 사용한 방식

```js
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);
```

this:
일반 함수로서 호출: 전역 객체
메서드로서 호출: 메서드를 호출한 객체(마침표 앞의 객체)
생성자 함수로서 호출: 생성자 함수가(미래에) 생성할 인스턴스

```js
// 일반함수: 함수 선언문, 함수 표현식
// 일반함수, new 연산자로 호출 시  constructor 함수라 할 수 있다
// callable한 constructor함수

function foo() {}
// 일반적으로 함수 호출 [[Call]]이 호출
foo();

// 생성자 함수로서 호출 [[Construct]]가 호출
// callable한 constructor함수수
new foo();

const baz = {
  // non-construct 함수
  x: function () {}, // 프로퍼티 값으로 생성하면 생성자 함수가 아님
};
```

생성자 함수를 호출할 경우 실수방지

```js
// 생성자 함수는 파스칼 케이스로 작성하는 것이 일반적
function Circle(radius) {
  // ES6
  // new 키워드를 안썼을 경우
  if (!new.target) {
    return new Circle(radius);
  }
  // 스코프 세이프 생성자 패턴(위 방식을 사용하지 못하는 경우)
  if (!(this instanceof Circle)) {
    return new Circle(radius);
  }
}
```
