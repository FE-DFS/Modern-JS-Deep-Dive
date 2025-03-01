## 중요 포인트

중요하다고 여긴 부분

- 실수 여지가 많음
  - 화살표함수 사용
    - 콜백함수로 호출 시 일반 함수로서의 호출로 평가되어 전역객체 window 또는 strict mod에서 undefined로 잡히는 문제 때문에 고전적 방법으로 this 처리가 필요했지만 this 바인딩이 없는 화살표 함수를 이용하여 의도에 맞게 this세팅이 가능해 졌다.
    - 화살표 함수에서 객체리턴이 필요한 경우 소괄호 빼먹지 말자!
    - 화살표 함수에는 this바인딩 개념이 없으므로 프로토타입에 화살표 함수를 걸면 원하는 결과가 나오지 않는다(프로토타입은 ES5 기준으로 생각하자)
  - 메서드 축약표현 사용 권장
  - 클래스 메서드에서도 마찬가지로 화살표 함수보단 ES6 메서드 축약을 사용하자(잘못 사용하면 프로토타입 메서드를 원했는데 인스턴스 메서드가 된다)
- Rest 파라미터 유용성
  - rest 파라미터는 바로 순회 호출 가능
    - 기존의 arguments 유사 배열을 slice.call(arguments)로 배열로 변환하고 순회하는 번거로움이 Rest 파라미터로 쉽게 처리 가능
    - 추가 파라미터 사용에 용이(하나의 배열로 받음)

# ES6 함수 구분

ES6이 전의 상황에서는 함수를 일반함수로서 호출, 생성자 함수로서 호출, 메서드로서 호출이 전부 가능했기 때문에 실수 유발이 크다

| ES6 함수 구분     | constructor | prototype | super | arguments |
| ----------------- | :---------: | :-------: | :---: | :-------: |
| 일반함수(Normal)  |      O      |     O     |   X   |     O     |
| 메서드(Method)    |      X      |     X     |   O   |     O     |
| 화살표함수(Arrow) |      X      |     X     |   X   |     X     |

### 메서드

메서드 축약표현으로 정의

```js
const obj = {
  x: 1,
  // foo는 메서드
  foo() {
    return this.x;
  }, // non-constructor
  // bar에 바인딩된 함수는 메서드가 아닌 일반 함수
  bar: function () {
    return this.x;
  },
};
console.log(obj.foo()); // 1
console.log(obj.bar()); // 1
console.log(new foo()); // TypeError: obj.foo is not a constructor
```

자신을 바인딩한 객체 `[[HomeObject]]`를 갖는다(super 키워드 사용가능)
**_보다 명확한 정의를 위해 ES6 방식의 축약표현을 사용하길 권장_**

```js
const base = {
	name: 'Lee',
	sayHi() {
		return `Hi! ${this.name}`;
	}
}

const derived = {
	__proto__ = base,
	// sayHi의 [[homeObject]] = derived
	// sayHi의 super = [[homeObject]].prototype = base
	sayHi() {
		return `${super.sayHi()}. how are you doing?`
	}
}
console.log(derived.sayHi()) // Hi Lee. how are you doing?
```

### 화살표 함수

`function` 키워드를 대신하여 `=>` 키워드를 사용하여 간략하게 표현할 수 있다
콜백 내부에서 this가 전역을 가리키는 문제를 해결하기 위한 대안으로 유용

표현식으로 정의해야 함

```js
const multiply = (x, y) => x * y;
multiply(1, 2) // 2
// 선언
const arrow = (x, y) => { ... }; // 소괄호 내부에 매개변수 작성
const arrow = x => { ... } // 매개변수 한 개인 경우 소괄호 생략
const arrow = () => { ... } // 매개변수 없는 경우 소괄호 생략 불가
const arrow = x => x ** 2 // 중괄호를 생략한다면 반드시 표현식이 들어가야함

// 몸체 정의
const create = (id, content) => ({ id, content }); // 객체 리턴 시 중괄호를 생략한 경우 소괄호로 묶어야 한다
create(1, 'JavaScript'); // { id: 1, content: 'JavaScript' }

// 함수 몸체가 여러 개의 문으로 구성된 경우 중괄호
const sum = (a, b) => {
	const result = a + b;
	return result;
}

// 즉시 실행(IIFE)
const person = (name => ({
	sayHi() { return `Hi? My name is ${name}.`; }
}))('Lee');
console.log(person.sayHi()) // Hi? My name is Lee

// 콜백함수
[1, 2, 3].map(x => x * 2 ) // [2, 4, 6]
```

### this

- 화살표 함수는 자체의 this 바인딩을 가지지 않는다.
- 화살표 함수의 내부에서 this 호출 시 가장 가까운 스코프의 this를 바인딩한다.

this는 함수의 호출 방식에 의해 바인딩할 this객체가 결정되는데 콜백함수에서의 this는
일반 함수로서 호출이기 때문에 this는 window 객체(class 내부의 경우 strict mod에 의해 undefined)를 가리킨다.
**lexcial this**: 화살표 함수에서 this를 참조하면 상위 스코프의 화살표함수가 아닌 가장 가까운 스코프에 this가 바인딩 된다.
`

```js
() =>
  this.x(
    function () {
      return this.x;
    }.bind(this)
  ); // 위와 동일하게 동작
```

person이 정의된 스코프에서의 this를 가짐
화살표 함수는 this를 따로 바인딩하지 않기 때문에 person 스코프의 this -> window를 가리킴

```js
const person = {
  name: "Lee",
  sayHi: () => console.log(`hello ${this.name}`), // window.name: ''을 가짐
};
person.sayHi(); // hello
```

### rest 파라미터

함수에 전달된 인수들의 목록을 배열로 전달받는다
rest파라미터는 배열로 직접 전달 받기 때문에 배열로 변경하는 과정이 필요없다.

```js
function foo(param, ...rest) {
  // 순차 할당
  console.log(param); // 1
  console.log(rest); // [2, 3, 4, 5]
}
foo(1, 2, 3, 4, 5);
```

### 매개변수 기본값

필요한 매개변수가 들어오지 않은 경우 undefined로 초기화 했으나 ES6부터는 원하는 값을 할당가능하다.

```js
funciton sum(x = 0, y = 0) {
	return x + y;
}
```
