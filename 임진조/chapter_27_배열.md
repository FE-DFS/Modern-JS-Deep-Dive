# 자바스크립트 배열 패턴 정리

## 1. 배열 순회 (Iteration)

### 1.1 `for` 반복문

가장 기본적인 순회 방법으로, 인덱스를 직접 제어할 수 있는 장점이 있습니다.

```js
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### 1.2 `for...of`

ES6에서 도입된 방식으로, 배열의 요소를 바로 꺼내 쓸 수 있습니다.

```js
const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
  console.log(value);
}
```

### 1.3 고차 함수(Higher-order functions)

자바스크립트 배열을 다룰 때 가장 많이 사용하는 방식입니다.

- **`forEach`**: 모든 요소를 순회하며 작업을 수행할 때 사용
- **`map`**: 배열의 각 요소를 변환하여 새로운 배열을 반환
- **`filter`**: 조건에 맞는 요소만 걸러 새로운 배열을 반환
- **`reduce`**: 모든 요소를 하나의 값으로 누적 (합산, 평균, 객체 변환 등)

```js
const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {
  console.log(index, value);
});

const mapped = arr.map((value) => value * 2); // [2, 4, 6, 8, 10]
const filtered = arr.filter((value) => value % 2 === 0); // [2, 4]
const reduced = arr.reduce((acc, value) => acc + value, 0); // 15
```

---

## 2. 배열 변형 (Transform)

### 2.1 `map`으로 변형하기

```js
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

const userNames = users.map((user) => user.name); // ['Alice', 'Bob']
```

### 2.2 `flat` / `flatMap`으로 중첩 배열 평탄화

```js
const nested = [1, [2, 3], [[4], 5]];
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5]
```

---

## 3. 배열 검색 및 조건 처리

### 3.1 `find`

```js
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

const foundUser = users.find((user) => user.age === 25);
console.log(foundUser); // { name: 'Bob', age: 25 }
```

### 3.2 `findIndex`

```js
const idx = users.findIndex((user) => user.age === 25);
console.log(idx); // 1
```

### 3.3 `some` / `every`

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.some((x) => x > 3)); // true
console.log(arr.every((x) => x > 3)); // false
```

---

## 4. 배열 원본 변경 vs 미변경 메소드

### 4.1 원본을 변경하는 메소드

- `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`

### 4.2 원본을 변경하지 않는 메소드

- `concat`, `slice`, `map`, `filter`, `reduce`, `flat`

```js
const arr = [1, 2, 3];
const newArr = arr.concat(4, 5); // [1, 2, 3, 4, 5]
```

---

## 5. 정렬(Sorting)

### 5.1 기본 정렬

```js
const arr = [40, 1, 5, 200];
arr.sort((a, b) => a - b); // [1, 5, 40, 200]
```

### 5.2 객체 배열 정렬

```js
const users = [
  { name: "Charlie", age: 32 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
users.sort((a, b) => a.age - b.age);
```

---

## 6. 유니크/중복 제거 패턴

### 6.1 `Set` 활용

```js
const arr = [1, 2, 2, 3, 3, 4];
const uniqueArr = [...new Set(arr)]; // [1, 2, 3, 4]
```

---

## 7. 배열 분할(Chunking), 그룹화(Grouping) 패턴

### 7.1 Chunking (배열을 일정한 크기로 나누기)

```js
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
```

---

## 8. 배열에서 요소 삭제하기

```js
const arr = [1, 2, 3, 4, 5];
const withoutThree = arr.filter((x) => x !== 3); // [1, 2, 4, 5]
```

---

## 9. 중첩 배열 평탄화(재귀적으로)

```js
function flatten(arr) {
  return arr.reduce((acc, val) => {
    return Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val);
  }, []);
}
```

---
