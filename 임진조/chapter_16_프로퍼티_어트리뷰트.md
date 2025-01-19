# 16 프로퍼티 어트리뷰트

## 내부 슬롯과 메서드

## 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체

```js
const person = {
  name: "Lee",
};

console.log(Object.getOwnPropertyDescriptor(person, "name"));
// 프로퍼티 디스크립터 객체 반환
// {value: 'lee', writable: true, enumerable: true, configurable: true}
```

## 데이터 프로퍼티와 접근자 프로퍼티

데이터 프로퍼티(data property): 키와 값으로 구성된 일반적인 프로퍼티
접근자 프로퍼티(accessor property): 자체값을 가지지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수(accessor function)으로 구성

데이터 프로퍼티
[[Value]]: 프로퍼티 키를 통해 접근시 반환하는 값, 키에 대한 재할당시 이 값이 재할당, 기존 값이 없을경우 동적으로 생성
[[Writable]]: 프로퍼티 값의 변경 가능 여부를 나타냄(불리언), false인 경우 읽기전용으로 값을 설정
[[Enumerable]]: 열거 가능여부를 나타냄, false의 경우 for...in문 또는 Object.keys 메서드로 열거 불가
[[configurable]]: 재정의 가능여부(불리언), false의 경우 해당 프로퍼티 재정의 불가

접근자 프로퍼티
[[Get]]: 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 함수, getter함수가 호출되고 결과가 값으로 반환
[[Set]]: 접근자 프로퍼티를 통해 데이터 값을 저장할 때 호출되는 함수, setter가 호출되거 그 결과가 프로퍼티 값으로 저장
[[Enumerable]]: 위와 같음
[[configurable]]: 위와 같음

```js
const person = {
    // 데이터 프로퍼티
    firstName: 'Ungmo',
    lastName: 'Lee',
    // 접근자로 접근
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}
```

데이터, 접근자 프로퍼티를 구별하는 방법

```js
// 일반 객체
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
// 함수 객체
Object.getOwnPropertyDescriptor(function {}, 'prototype');
```

## 프로퍼티 정의

```js
const person = {};

Object.defineProperty(person, "firstName", {
  value: "Umgmo",
  writable: true,
  enumerable: true,
  configurable: true,
});
```

## 객체 변경 방지

객체 확장 금지
프로퍼티 추가 금지
Object.preventExtensions()
프로퍼티 추가 x
프로퍼티 삭제 o
프로퍼티 값 읽기 o
프로퍼티 값 쓰기 o
프로퍼티 어트리뷰트 재정의 o
Object.isExtensible(); // 확인용 메서드

객체 밀봉
읽기 쓰기 가능
Object.seal()
프로퍼티 추가 x
프로퍼티 삭제 x
프로퍼티 값 읽기 o
프로퍼티 값 쓰기 o
프로퍼티 어트리뷰트 재정의 x
Object.isSealed()

객체 동결
읽기만 가능
Object.freeze()
프로퍼티 추가 x
프로퍼티 삭제 x
프로퍼티 값 읽기 o
프로퍼티 값 쓰기 x
프로퍼티 어트리뷰트 재정의 x
Object.isFreeze()

위 세가지를 사용하더라도 중첩 객체는 적용이 불가능
중첩 객체를 위 3가지 함수로 재귀 호출하여 세팅은 가능
