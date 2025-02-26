### Set과 Map

#### 1. Set

Set 객체는 중복되지 않는 유일한 값들의 집합입니다.

##### 1.1 Set 객체 생성

```js
// 빈 Set 생성
const set = new Set();

// 배열로부터 Set 생성
const numbersSet = new Set([1, 2, 2, 3, 3, 4]); // 중복 제거됨
console.log(numbersSet); // Set(4) {1, 2, 3, 4}

// 문자열로부터 Set 생성
const charactersSet = new Set("hello");
console.log(charactersSet); // Set(4) {'h', 'e', 'l', 'o'}
```

##### 1.2 Set 메서드

```js
const fruitSet = new Set();

// 요소 추가
fruitSet.add("apple");
fruitSet.add("banana").add("orange"); // 메서드 체이닝 가능

// 요소 존재 여부 확인
console.log(fruitSet.has("apple")); // true
console.log(fruitSet.has("grape")); // false

// 요소 삭제
fruitSet.delete("banana");

// 요소 개수 확인
console.log(fruitSet.size); // 2

// 모든 요소 삭제
fruitSet.clear();
```

##### 1.3 Set 활용 예제

```js
// 배열의 중복 제거
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// 교집합 구현
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);
const intersection = new Set([...set1].filter((x) => set2.has(x)));
console.log(intersection); // Set(2) {3, 4}

// 차집합 구현
const difference = new Set([...set1].filter((x) => !set2.has(x)));
console.log(difference); // Set(2) {1, 2}

// 합집합 구현
const union = new Set([...set1, ...set2]);
console.log(union); // Set(6) {1, 2, 3, 4, 5, 6}
```

#### 2. Map

Map 객체는 키-값 쌍을 저장하는 컬렉션입니다. 객체와 달리 키로 모든 타입을 사용할 수 있습니다.

##### 2.1 Map 객체 생성

```js
// 빈 Map 생성
const map = new Map();

// 배열로부터 Map 생성
const userMap = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
]);

// 객체를 키로 사용
const objKey = { id: 1 };
const myMap = new Map();
myMap.set(objKey, "value for object key");
```

##### 2.2 Map 메서드

```js
const userInfo = new Map();

// 요소 추가
userInfo.set("name", "Alice");
userInfo.set("age", 25).set("email", "alice@example.com");

// 요소 접근
console.log(userInfo.get("name")); // 'Alice'

// 요소 존재 여부 확인
console.log(userInfo.has("email")); // true

// 요소 삭제
userInfo.delete("age");

// 요소 개수 확인
console.log(userInfo.size); // 2

// 모든 요소 삭제
userInfo.clear();
```

##### 2.3 Map 활용 예제

```js
// 객체를 키로 사용하는 캐시 시스템
const cache = new Map();

const user1 = { id: 1, name: "John" };
const user2 = { id: 2, name: "Jane" };

cache.set(user1, { lastAccess: Date.now() });
cache.set(user2, { lastAccess: Date.now() });

// 데이터 접근
console.log(cache.get(user1).lastAccess);

// Map을 활용한 빈도수 계산
const text = "hello world hello";
const wordFreq = new Map();

text.split(" ").forEach((word) => {
  wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
});

console.log(wordFreq); // Map(2) {'hello' => 2, 'world' => 1}

// Map과 배열 변환
const mapToArray = [...userMap]; // [['name', 'John'], ['age', 30], ...]
const arrayToMap = new Map([
  ["a", 1],
  ["b", 2],
]);
```

##### 2.4 WeakMap

WeakMap은 키로 객체만 사용할 수 있으며, 키로 사용된 객체에 대한 참조가 약하게 유지됩니다.

```js
const weakMap = new WeakMap();

let obj = { data: "some data" };
weakMap.set(obj, "metadata");

// obj에 대한 참조가 없어지면 WeakMap의 항목도 가비지 컬렉션의 대상이 됨
obj = null;

// WeakMap은 이터러블이 아님
// 따라서 for...of 등으로 순회할 수 없음
```

#### 3. Set과 Map의 성능 비교

```js
// 대규모 데이터 처리 시 성능 비교
const largeArray = Array.from({ length: 1000000 }, (_, i) => i);
const largeSet = new Set(largeArray);
const largeMap = new Map(largeArray.map((x) => [x, x]));

console.time("Array Search");
largeArray.includes(999999);
console.timeEnd("Array Search");

console.time("Set Search");
largeSet.has(999999);
console.timeEnd("Set Search");

console.time("Map Search");
largeMap.has(999999);
console.timeEnd("Map Search");
```

Set과 Map은 각각 고유한 값의 집합과 키-값 쌍의 컬렉션을 다룰 때 유용하며, 특히 데이터의 고유성이 필요하거나 키-값 관계를 관리할 때 효과적입니다.
