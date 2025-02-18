### 이터러블과 이터레이터

#### 1. 이터러블과 이터레이터 프로토콜

이터러블 프로토콜은 순회 가능한 데이터 컬렉션을 만들기 위한 규약입니다. Symbol.iterator를 구현하여 이터러블 객체를 만들 수 있습니다.

```js
// 이터러블 객체 예시
const myIterable = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        }
        return { done: true };
      },
    };
  },
};

// for...of로 순회
for (const item of myIterable) {
  console.log(item); // 1, 2, 3
}
```

#### 2. 빌트인 이터러블

자바스크립트의 기본 내장 이터러블 객체들입니다.

```js
// Array
const arr = [1, 2, 3];
for (const item of arr) {
  console.log(item); // 1, 2, 3
}

// String
const str = "hello";
for (const char of str) {
  console.log(char); // 'h', 'e', 'l', 'l', 'o'
}

// Map
const map = new Map([
  ["a", 1],
  ["b", 2],
]);
for (const [key, value] of map) {
  console.log(key, value); // 'a' 1, 'b' 2
}

// Set
const set = new Set([1, 2, 3]);
for (const item of set) {
  console.log(item); // 1, 2, 3
}
```

#### 3. for...of vs for...in

for...of는 이터러블 객체를 순회하고, for...in은 객체의 프로퍼티를 순회합니다.

```js
const arr = ["a", "b", "c"];
arr.prop = "property";

// for...of는 요소만 순회
for (const item of arr) {
  console.log(item); // 'a', 'b', 'c'
}

// for...in은 프로퍼티도 순회
for (const key in arr) {
  console.log(key); // '0', '1', '2', 'prop'
}
```

#### 4. 유사 배열 객체와 이터러블

유사 배열 객체는 length 프로퍼티와 인덱스를 가지지만 배열 메서드를 사용할 수 없습니다.

```js
// 유사 배열 객체
const arrayLike = {
  0: "apple",
  1: "banana",
  2: "orange",
  length: 3,
};

// 유사 배열 객체를 배열로 변환
const array = Array.from(arrayLike);
console.log(array); // ['apple', 'banana', 'orange']

// arguments 객체는 유사 배열 객체이면서 이터러블
function example() {
  console.log(Array.isArray(arguments)); // false
  console.log(arguments.length); // 3

  // 이터러블이므로 for...of 사용 가능
  for (const arg of arguments) {
    console.log(arg);
  }
}

example(1, 2, 3); // 1, 2, 3
```

#### 5. 이터러블 변환

유사 배열 객체나 이터러블이 아닌 객체를 이터러블로 변환하는 방법입니다.

```js
// 객체를 이터러블로 변환
const obj = {
  from: 1,
  to: 5,
};

// Symbol.iterator 구현으로 이터러블 변환
Object.defineProperty(obj, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function () {
    const start = this.from;
    const end = this.to;
    let current = start;
    return {
      next() {
        return current <= end
          ? { value: current++, done: false }
          : { done: true };
      },
    };
  },
});

// 이제 for...of 사용 가능
for (const num of obj) {
  console.log(num); // 1, 2, 3, 4, 5
}
```

#### 6. 이터러블의 장점

- 데이터 소비자와 생산자를 분리할 수 있습니다.
- 지연 평가(lazy evaluation)가 가능합니다.
- for...of, 스프레드 문법, 구조 분해 할당 등에서 사용할 수 있습니다.

```js
// 이터러블 활용 예시
const myIterable = {
  *[Symbol.iterator]() {
    yield* [1, 2, 3];
  },
};

// 스프레드 문법
const arr = [...myIterable]; // [1, 2, 3]

// 구조 분해 할당
const [first, ...rest] = myIterable; // first: 1, rest: [2, 3]

// Array.from
const arrayFromIterable = Array.from(myIterable); // [1, 2, 3]
```

#### 7. 이터러블 생성 함수

다양한 이터러블을 생성하는 함수들의 예시입니다.

```js
// 범위 이터러블 생성 함수
function createRangeIterator(start, end, step = 1) {
  return {
    [Symbol.iterator]() {
      let current = start;
      return {
        next() {
          if (current <= end) {
            const value = current;
            current += step;
            return { value, done: false };
          }
          return { done: true };
        },
      };
    },
  };
}

// 범위 이터러블 사용
for (const num of createRangeIterator(1, 5)) {
  console.log(num); // 1, 2, 3, 4, 5
}

// 이터러블이면서 이터레이터인 객체를 반환하는 함수
const fibonacciFunc = function (max) {
  let [pre, cur] = [0, 1];

  // Symbol.iterator 메서드와 next 메서드를 소유한 이터러블이면서 이터레이터 객체를 반환
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [pre, cur] = [cur, pre + cur];
      return { value: cur, done: cur >= max };
    },
  };
};

// iter는 이터러블이면서 이터레이터이다.
const iter = fibonacciFunc(10);

// iter는 for...of 문에 사용할 수 있다.
for (const num of iter) {
  console.log(num); // 0, 1, 1, 2, 3, 5, 8
}

// iter는 이터레이터이다.
iter = fibonacciFunc(10);
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: 5, done: false }
console.log(iter.next()); // { value: 8, done: false }
console.log(iter.next()); // { value: undefined, done: true }

// 제너레이터를 사용한 이터러블 생성 함수
function* createNumberIterator(start, end, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

// 제너레이터 이터러블 사용
const numbers = createNumberIterator(1, 5, 2);
console.log([...numbers]); // [1, 3, 5]

// 무한 시퀀스 이터러블 (지연 평가 활용)
function* createInfiniteSequence() {
  let num = 1;
  while (true) {
    yield num++;
  }
}

// 무한 시퀀스에서 필요한 만큼만 가져오기
const infinite = createInfiniteSequence();
const firstFive = Array.from({ length: 5 }, () => infinite.next().value);
console.log(firstFive); // [1, 2, 3, 4, 5]
```
