# 프로토타입

자바스크립트는 프로토타입을 기반으로 상속을 구현한다.

## 상속

인스턴스마다 동일한 메소드를 중복 소유하는 건 메모리를 낭비한다. 그러므로 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상
속받아 그대로 사용할 수 있게 한다.

## prototype

인스턴스는 상위 객체 역할을 하는 prototype의 모든 프로퍼티와 메서드를 상속받는다.

생성자가 생성한 인스턴스 객체는 [[Prototype]] 내부 슬롯을 가진다. 이 내부 슬롯의 값은 프로토타입의 참조값을 가지고 있다. 그래서 인스턴스는 참조값을 타고 다서 프로토타입의 메소드를 사용할 수 있다. 즉 인스턴스는 프로토타입의 자산을 공유한다.

생성자의 프로퍼티 prototype은 construct로 생성자 함수에 접근

프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재

## proto

[[prototype]] 내부 슬롯에 간접적으로 접근해 생성자 함수.prototype에 접근할 수 있는 객체

이 친구도 prototype의 프로퍼티

## 프로퍼티 체인

자바스크립트 엔진은 객체의 프로퍼티(메서드 포함)에 접근
하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 **proto** 접근자 프로퍼티가 가리키는 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다.

체인의 종점은 Object.prototype이고 Object.prototype의 [[Prototype]] 값은 null이다.

종점으로 가도 없는 경우 undefined가 나온다.

## 프로퍼티에 접근하고 싶은 경우

proto가 없는 경우도 있으니 getPrototypeOf, setPrototypeOf를 사용해라

## 함수의 prototype

함수는 자신만의 prototype을 가진다. 그러나 화살표 함수는 안 가진다. 그러므로 non-construct

함수 prototype === 인스턴스 proto

## constructor

모든 프로토타입은 constructor를 프로퍼티로 갖는다. constructor는 값으로 생성자 함수 참조를 가지고 있다.

```js
function Person(name) {
  this.name = name;
}
const me = new Person("JongMin");
console.log(me.constructor === Person);
// true
```

## prototype 생성 시점

생성자 함수 객체가 만들어지는 시점에 같이 만들어진다.

빌트인 생성자 prototype은 전역 객체 생성 시점에 생긴다.

## prototype의 prototype

언제나 Object.prototype

## 추상 연산 OrdinaryObjectCreate

인수로 [[Prototype]]에 할당할 prototype과 프로퍼티 를 받는다.

## 객체 만드는 다양한 방법

객체 리터럴, Oject 생성자 함수: 인스턴스의 prototype-> Object.prototype

사용자 정의 생성자 함수: 인스턴스의 prototype -> 함수의 prototype(추가하지 않는다면 보통 constructor만 가지고 있다.)

## 생성자 함수 만드는 법

```js
const Person = (function () {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHello = function () {
    console.log("Hi I'm " + `${this.name}`);
  };
  return Person;
})();

const me = new Person("jojo");

me.sayHello();
//Hi I'm jojo
```

## 오버라이딩

prototype 프로퍼티와 같은 이름을 인스턴스에 추가하면 프로토타입 체인이 인스턴스 프로퍼티를 먼저 검색해서 추가한 프로퍼티에 접근한다. 상위 체인 프로퍼티는 가려진다고 해서 이를 섀도잉이라고 한다.

## prototype 삭제

하위 객체를 통해서 삭제를 포함한 set 액세스는 허용되지 않는다.

## .prototype, proto로 prototype 교ㅍ체

생성자.prototype로 바꾸면 생성자의 prototype 프로퍼티를 바꾼다. proto로 접근해 prototype을 바꾸면 인스턴스의 prototype를 바꾼다. 후자의 경우 constructor가 상위로 올라가게 된다.

## instance of

```js
객체 instance of 생성자 함수

생성자 함수의 prototype이 객체 프로타입 체인에 있으면 true를 반환한다.

그러므로 constructor와의 연결이 파괴되어도 true가 된다. prototype이 체인에 있으면 되니까
```

## Object.create

첫 번째 인수는 상속받을 prototype, 두 번째는 프로퍼티키와 속성을 포함한 객체

```js
 obj = Object.create(Object.prototype, {
 x： { value: 1, writable: true, enumerable: true, configurable: true }
})；
```

장점

- new 연산자가 없이도 객체를 생성할 수 있다.
- 프로토타입을 지정하면서 객체를 생성할 수 있다.
- 객체 리터럴에 의해 생성된 객처도 상속받을 수 있다.

Object.create으로 생성된 객체는 Object.prototype이 최종 체인에 없다. 그러므로 eslint는 Object.prototype에 있는 메소드를 사용하는 걸 권하지 않는다.

```js
// 프로토타입이 null인 객처/를 생성한다.
const obj = Object.create(null);
obj.a = 1;
// console.log(obj.hasOwnProperty('a'));
// TypeError: obj.hasOwnProperty is not a function
// Object.prototype의 빌트인 메서드는 객체로 직접 호출하지 않는다.
console.log(Object.prototype.hasOwnProperty.call(obj, "a")); // true
```

## proto로 직접 상속

```js
const myProto = { x: 10 };
 // 객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있다.
const obj = {
y： 20,
// 객처/를 직접 상속받는다.
 // obj -> myProto -> Object.prototype -> null
__proto__: myProto
 }；
/* 위 코드는 아래와 동일하다.
 const obj = Object.create(myProto, {
 y: { value: 20, writable: true, enumerable: true, configurable: true }
})；
*/
 console.log(obj.x, obj.y); // 10 20
 console.log(Object.getPrototypeOf(obj) === myProto); // true
```

## 정적 메소드 / 프로퍼티

생성자 함수의 프로퍼티, 생성자 함수 객체로 바로 접근 호출 가능, 인스턴스는 접근 불가능

## in 연산자

객체 내에 프로퍼티가 존재하는지 여부를 확인하는 연산자

모든 프로토타입의 프로퍼티까지 확인하므로 주의가 필요하다.

Reflect.has라는 놈도 나옴. 동일한 일을 한다.

## for ... in 문

객체 내 모든 프로퍼티 순회

for ... in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 true인 프로퍼티를 순회하며 열거한다.

Object.keys/values/entries 메서드를 사용하는 것을 권장

```js

const person = {
name: 'Lee',
address: 'Seoul',
__proto__: { age: 20 }
}；
console.log(Object.keys(person));
// ["name", "address"]

console.log(Object.values(person));
// ["Lee", "Seoul"]

console.log(Object.entries(person));
 // [["name", "Lee"], ["address", "Seoul"]
```
