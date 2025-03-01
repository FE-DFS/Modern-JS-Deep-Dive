### Symbol

#### 1. Symbol 개요

Symbol은 ES6에서 도입된 7번째 데이터 타입으로, 변경 불가능한 원시 타입의 값입니다. Symbol은 주로 유일한 식별자가 필요할 때 사용됩니다.

```js
// Symbol 생성
const mySymbol = Symbol();
const mySymbol2 = Symbol("설명");

// 심볼은 유일한 값
console.log(Symbol() === Symbol()); // false
console.log(Symbol("desc") === Symbol("desc")); // false
```

#### 2. Symbol.for / Symbol.keyFor

전역 심볼 레지스트리에 심볼을 생성하고 공유할 수 있습니다.

```js
// 전역 심볼 생성
const s1 = Symbol.for("mySymbol");
const s2 = Symbol.for("mySymbol");

console.log(s1 === s2); // true

// 심볼 키 조회
console.log(Symbol.keyFor(s1)); // 'mySymbol'
```

#### 3. Symbol의 실제 사용 사례

##### 3.1 객체의 프로퍼티 키로 사용

```js
const USER_NAME = Symbol("userName");
const USER_AGE = Symbol("userAge");

const user = {
  [USER_NAME]: "John",
  [USER_AGE]: 25,
};

// Symbol 프로퍼티는 일반적인 순회에서 제외됨
console.log(Object.keys(user)); // []
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(userName), Symbol(userAge)]
```

##### 3.2 충돌 방지를 위한 상수 값

```js
// 라이브러리 1
const lib1 = {
  LOADING_STATE: Symbol("LOADING"),
};

// 라이브러리 2
const lib2 = {
  LOADING_STATE: Symbol("LOADING"),
};

// 각각의 LOADING_STATE는 충돌하지 않음
console.log(lib1.LOADING_STATE === lib2.LOADING_STATE); // false
```

##### 3.3 내장 심볼을 활용한 객체 커스터마이징

```js
// 객체를 문자열로 변환할 때의 동작 정의
const customObject = {
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return "커스텀 문자열";
    }
    return 123;
  },
};

console.log(String(customObject)); // '커스텀 문자열'
console.log(Number(customObject)); // 123
```

##### 3.4 이터러블 객체 구현

```js
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        }
        return { done: true };
      },
    };
  },
};

// 이터러블 객체 사용
for (const num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}
```

#### 4. 주의사항

- Symbol은 new 연산자와 함께 사용할 수 없다.
- Symbol 값은 암묵적으로 문자열로 변환되지 않는다.
- Object.getOwnPropertySymbols 메서드로만 심볼 프로퍼티를 조회할 수 있다.
- Symbol.for로 생성한 심볼만 Symbol.keyFor로 키를 조회할 수 있다.
