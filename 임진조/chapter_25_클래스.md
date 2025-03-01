### 클래스

#### 클래스는 프로토타입의 문법적 설탕인가?

프로토 타입으로 클래스 생성
클래스는 함수이며 기존 프로토타입 기반 패턴을 클래스 기반 패턴처럼 사용할 수 있도록 하는 문법적 설탕으로 보기엔 다른 부분이 있어 새로운 객체 생성으로 보는게 합당하다.
프로토타입 기반으로 작동하는 것은 맞지만 생성자 함수보다 더 엄격하고 추가 기능을 가진다.

1. new 연산자를 사용해야 한다
2. extends, super 키워드 제공
3. 호이스팅이 발생하지 않는 것 처럼 동작
4. 클래스 내의 모든 코드는 strict mode 지정되어 실행
5. constructor, 프로토타입 메서드, 정정 메서드는 모두프로퍼티 어트리뷰트 [[Enumerable]]값이 false

```js
var Person = (function () {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHi = function () {
    console.log("Hi! My name is " + this.name);
  };
  return Person;
})();

var me = new Person("진조");
me.sayHi(); // Hi! My name is 진조
```

#### 클래스 정의

```js
// 익명 클레스
class Person class {};
// 기명 클래스
const Person = class MyClass{};
```

```js
class Person {
  // 생성자 함수
  constructor(name) {
    // 인스턴스 생성과 동시에 초기화
    this.name = name; // public
  }
  // 프로토타입 메서드
  sayHi() {
    console.log("Hi! My name is " + this.name);
  }
  // 정적 메서드
  static sayHello() {
    console.log("Hello");
  }
}

// 인스턴스 생성
const me = new Person("Lim");

// 인스턴스 프로퍼티 참조
console.log(me.name); // Lim
// 프로토타입 메서드 호출
me.sayHi(); // Hi! My name is Lim
// 정적 메서드 호출
Person.sayHello(); // Hello
```

#### 클래스 호이스팅

클래스 정의 이전에 참조 불가
클래스도 호이스팅 발생

#### 인스턴스 생성

```js
class Person {}
// 인스턴스 생성
const me = new Person();
console.log(me); // Person {}
```

#### 메서드

##### constructor

생성하 함수는 인스턴스 생성과 동시에 초기화 하기 위한 메서드이다.

```js
class Person {
  // 생성자(생략한다면 암묵적으로 빈 constructor 생성)
  constructor(name) {
    this.name = name;
    // return 문을 사용해서는 안된다. 암묵적으로 this 리턴함
  }
}

console.log(typeof Person); // function
console.log(Person); // 평가되어 함수 객체가 된다.
```

#### 프로토타입 메서드

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me = new Person("Lim");
me.sayHi(); // Hi! My name is Lim

class Person {
  constructor(name) {
    this.name;
  }
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}
const me = new Person("Lim");
me.sayHi(); // Hi! My name is Lim
```

#### 정적 메서드

인스턴스를 생성하지 않고도 호출가능한 메서드

```js
function Person(name) {
  this.name;
}
Person.sayHi = function () {
  console.log("Hi");
};
Person.sayHi(); // Hi

class Person {
  constructor(name) {
    this.name = name;
  }
  static sayHi() {
    console.log("Hi");
  }
}
Person.sayHi(); // Hi
```

#### 상속에 의한 클래스 확장

상속에 의한 클래스 확작은 기존 클래스를 상속받아 새로운 클래스를 확장하여 정의하는 것
프로토타입을 이용해 상속관계를 구현 클래스 생성자 함수를 [[prototype]]으로 슈퍼 클레스를 연결함으로서 상속한다. 이때 연결된 프로토타입 체인도 생성하기 때문에 프로토타입 메서드, 정적 메서드 모두 상속한다.

자식 클래스 -> 서브 클래스
부모 클래스 -> 슈퍼 클래스

```js
class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }
  eat() {
    return "eat";
  }
  move() {
    return "move";
  }
}

class Bird extends Animal {
  fly() {
    return "fly";
  }
}

const bird = new Bird(1, 5);
console.log(bird); // Bird {age: 1, weight: 5}
```

#### 동적 상속

```js
function Base1() {}
class Base2 {}

let condition = true;
class Derived extends (condition ? Base1 : Base2) {}
const derived = new Derived();
console.log(derived); // Derived {}
```

#### 서브 클래스의 constructor

```js
class Base {
  constructor() {}
}

class Derived extends Base {
  constructor(...args) {
    super(...args); // 부모의 constructor 호출
  }
}
```
