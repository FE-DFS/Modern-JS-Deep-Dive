# this

this: 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수. this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드 참조가능
바인딩: 식별자와 값을 연결하는 것

```js
const circle = {
  radius: 5,
  getDiameter() {
    // this는 메서드를 호출한 객체를 가리킨다
    return 2 * this.radius;
  },
};
console.log(circle.getDiameter()); // 10
```

```js
function Circle(radius) {
  // 생성자 함수가 생성할 인스턴스를 가리킨다
  this.radius = radius;
}
Circle.prototype.getDiameter = function () {
  // 함수가 생성할 인스턴스를 가리킨다
  return 2 * this.radius;
};

const circle = new Circle(5);
console.log(circle.getDiameter()); // 10
```

자바 스크립트의 경우 this가 호출되는 방식에 따라 this의 바인딩이 달라진다. strict mode를 켜도 달라짐(이때 일반함수로서 호출하면 window가 걸리는게 아니라 undefined걸림: this를 사용할 이유가 없기때문)

```js
console.log(this); // window

function square(number) {
  // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다
  console.log(this);
  return number * number;
}

square(2); // 4

const person = {
  name: "Lee",
  getName() {
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
    console.log(this); // { name: 'Lee', getName: f}
    return this.name;
  },
};

console.log(person.getName()); // Lee

function Person(name) {
  this.name;
  // 생성자 함수 내부의 this는 생성할 인스턴스를 가리킨다.
  console.log(this); // Person { name: 'Lee'}
}
const me = new Person("Lee");
```

## 함수 호출 방식과 this 바인딩

렉시컬 스포크와 this 바인딩
렉시컬 스코프: 함수의 상위 스코프를 결정하는 방식(함수 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프 결정)
this 바인딩: 함수 호출 시점

1. 일반함수 호출
2. 메서드 호출
3. 생성자 함수 호출
4. Function.prototype.apply/call/bind 메서드에 의한 호출

```js
const foo = function () {
  console.log(this);
};

foo(); // window 전역 가리킴

const obj = { foo };
obj.foo(); // obj // 메서드 호출 객체 가리킴

new foo(); // foo {} 인스턴스 가리킴

const bar = { name: "bar" };

foo.call(bar); // bar
foo.apply(bar); // bar
foo.bind(bar)(); // bar
```

중첩 함수, 콜백함수에서의 this는 window를 가지기 때문에 이를 해결하기 위한 방법이 필요

```js
var value = 1;

const obj = {
  value: 100,
  foo() {
    value: 100;
    const that = this;
    // 1.메서드에서 this는 객체를 가리킴을 이용해 that으로 접근
    setTimeout(function () {
      console.log(that.value); // 100
    }, 100);
    // 2. 콜백에 명시적으로 바인딩
    setTimeout(function () {
      console.log(this.value); // 100
    });
    // 화살표함수는 항상 상위스코프가 this를 가리킴을 이용
    setTimeout(() => console.log(this.value), 100); // 100
  },
};

obj.foo();
```

메서드로 호출시 알아둬야 하는 부분은 메서드로 존재라는 함수는 객체 내부에 존재하는 것이 아니라 외부에 따로 존재하고 식별자로 연결된 상태이기 때문에 다른 곳에 할당이 가능하다

```js
person.getName이 존재한다고 생각하자
const anotherPerson = {
    name: 'Kim'
}
antherPerson.getName = person.getName;
console.log(anotherPerson.getName()) // Kim
// 일반 함수로서 호출
console.log(getName()) // ''
```
