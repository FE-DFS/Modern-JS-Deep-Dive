# 심벌

심벌은 ES6에서 도입된 7번째 데이터 타입으로 변경 불가능한 원시 타입의 값이다. 심벌 값은 다른 값과 중복되지 않는 유일무이한 값이다. 따라서 주로 이름의 충돌 위험이 없는 유일한 프로퍼티 키를 만들기 위해 사용한다. 프로퍼티 키로 사용할 수도 있다.

## 생성

생성자 함수로만 만들 수 있다.(new를 쓰지 않음) 이때 생성된 심벌 값은 외부로 노출되지 않아 확인할 수 없으며. 다른 값과 절대 중복되지 않는 유일무이한 값
이다.

```js
// Symbol 함수를 호출하여 유일무이한 심벌 값을 생성한다.
const mySymbol = Symbol();
console.log(typeof mySymbol); // symbol
// 심벌 값은 외부로 노출되지 않아 확인할 수 없다.
console.log(mySymbol); // Symbol()
```

```js
// 문자열 인수: 심벌값에 대하 설명으로 디버깅 용도
// 심벌 값에 대한 설명이 같더라도 유일무이한 심벌 값을 생성한다.
const mySymbol1 = Symbol("mySymbol");
const mySymbol2 = Symbol("mySymbol");

const mySymbol = SymboK'mySymbol');
 // 심벌도 래퍼 객체를 생성한다
console.log(mySymbol.description); // mySymbol
 console.log(mySymbol.toString()); // Symbol(mySymbol)
```

## Symbol.for/Symbol.keyFor

```js
// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
const si = Symbol.for("mySymbol");
// 전역 심벌 러/자스트리에 mySymbol이라는 키로 저장된 심벌 값이 있으면 해당 심벌 값을 반환
const s2 = Symbol.for("mySymbol");
console.log(sl === s2); // true
```

```js
// 전역 심벌 러/지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
const si = Symbol.for("mySymbol");
// 전역 심벌 러/지스트리에 저장된 심벌 값의 키를 추출
Symbol.keyFor(si); // —* mySymbol
// Symbol 함수를 호출하여 생성한 심벌 값은 전역 심벌 레지스트리에 등록되어 관리되지 않는다.
const s2 = Symbol("foo");
// 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
Symbol.keyFor(s2); // — undefined
```

## 프로파티 키

```js
const obj = {
 // 심벌 값으로 프로퍼티 키를 생성
[Symbol.for("mySymbol")]： 1
 }；
obj[Symbol.for( mySymbol1)]; // - 1

```

심벌 값은 유일무이한 값이므로 심벌 값으로 프로퍼티 키를 만들면 다른 프로퍼티 키와 절대 충돌하지 않는다.

심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티는 for ... in 문이나 Object.keys, Object.getOwnPropertyNames 메서드로 찾을 수 없다. 이처럼 심벌 값을 프로퍼티 키로 사용하여 프로퍼티를 생성하면 외부에 노출할 필요가 없는 프로퍼티를 은닉할 수 있다.
