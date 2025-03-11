# String

표준 빌트인 객체인 String은 원시 타입인 문자열을 다룰 때 유용한 프로퍼티와 메서드를 제공

## length

String 래퍼 객체는 유사 배열 객체

## 메서드

원본을 바꾸는 메서드는 존재하지 않는다. 항상 새로운 문자를 반환.

### String.prototype.indexOf

indexOf 메서드는 대상 문자열(메서드를 호출한 문자열)2에서 인수로 전달받은 문자열을 검색하여 첫 번째 인덱스를 반환한다. 검색에 실패하면 -1을 반환한다

### String.prototype.search

search 메서드는 대상 문자열에서 인수로 전달받은 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다. 검색에 실패하면 -1을 반환한다.

### String.prototype.includes

ES6에서 도입된 includes 메서드는 대상 문자열에 인수로 전달받은 문자열이 포함되어 있는지 확인하여 그 결과를 true 또는 false로 반환한다.

### String.prototype.startsWith

ES6에서 도입된 startsWith 메서드는 대상 문자열이 인수로 전달받은 문자열로 시작하는지 확인하여 그 결과를 true 또는 false로 반환한다

### String.prototype.startsWith

ES6에서 도입된 startsWith 메서드는 대상 문자열이 인수로 전달받은 문자열로 시작하는지 확인하여 그 결과를 true 또는 false로 반환한다.

### String.prototype.endsWith

ES6에서 도입된 endsWith 메서드는 대상 문자열이 인수로 전달받은 문자열로 끝나는지 확인하여 그 결과를 true 또는 false로 반환한다.

### String.prototype.charAt

charAt 메서드는 대상 문자열에서 인수로 전달받은 인덱스에 위치한 문자를 검색하여 반환한다

### String.prototype.substring

substring 메서드는 대상 문자열에서 첫 번째 인수로 전달받은 인덱스에 위치하는 문자부터 두 번째 인수로 전달받은 인덱스에 위치하는 문자의 바로 이전 문자까지의 부분 문자열을 반환한다.

```js
const str = "Hello World";
str.substring(1, 4); // — ell
str.substring(1); // — ello World
```

```js
const str = 'Hello World';
 // 스페이스를 가준으로 앞에 있는 부분 문자열 취득
str.substring(0, str.indexOf(" ")); // — 'Hello'
// 스페이스를 가준으로 뒤에 있는 부분 문자열 취득
 str.substring(str.indexOf(" "
)+1, str.length)； // — 'World'
```

### String.prototype.slice

slice 메서드는 substring 메서드와 동일하게 동작한다. 단. slice 메서드에는 음수인 인수를 전달할 수 있다. 음수인 인수를 전달하면 대상 문자열의 가장 뒤에서부터 시작하여 문자열을 잘라내어 반환한다.

### String.prototype.toUpperCase

toUpperCase 메서드는 대상 문자열을 모두 대문자로 변경한 문자열을 반환한다

### String.prototype.toLowerCase

toLowerCase 메서드는 대상 문자열을 모두 소문자로 변경한 문자열을 반환한다.

### String.prototype.trim

trim 메서드는 대상 문자열 앞뒤에 공백 문자가 있을 경우 이를 제거한 문자열을 반환한다.

trimStart,trimEnd도 있음

### String.prototype.repeat

ES6에서 도입된 repeat 메서드는 대상 문자열을 인수로 전달받은 정수만큼 반복해 연결한 새로운 문자열을 반환한다. 인수로 전달받은 정수가 0이면 빈 문자열을 반환하고, 음수이면 RangeError를 발생시킨다. 인수를 생략하면 기본값 0이 설정된다.

### String.prototype.replace

replace 메서드는 대상 문자열에서 첫 번째 인수로 전달받은 문자열 또는 정규표현식을 검색하여 두 번째 인
수로 전달한 문자열로 치환한 문자열을 반환한다.

($&)는 검색된 문자열을 의미한다 $&는 검색된 문자열을 의미한다

```js
// 카멜 케이스를 스네이크 케이스로 변환하는 함수
function camelToSnake(camelCase) {
  // /([a-z])([A-Z])/g는 소문자와 대문자가 이어진 부분을 찾는다.
  return camelCase.replace(/([a-z])([A-Z])/g, (_, lower, upper) => {
    return lower + "_" + upper.toLowerCase();
  });
}

const camelCase = "helloWorld";
console.log(camelToSnake(camelCase)); // 'hello_world'

// 스네이크 케이스를 카멜 케이스로 변환하는 함수
function snakeToCamel(snakeCase) {
  // /_([a-z])/g는 언더스코어와 그 뒤의 소문자를 찾는다.
  return snakeCase.replace(/_([a-z])/g, (_, letter) => {
    return letter.toUpperCase();
  });
}

const snakeCase = "hello_world";
console.log(snakeToCamel(snakeCase)); // 'helloWorld'
```

### String.prototype.split

split 메서드는 대상 문자열에서 첫 번째 인수로 전달한 문자열 또는 정규 표현식을 검색하여 문자열을 구분한 후 분리된 각 문자열로 이루어진 배열을 반환한다. 인수로 빈 문자열을 전달하면 각 문자를 모두 분리하고, 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.

```js
const str = "How are you doing?";
// 공백으로 구분(단어로 구분)하여 배열로 반환한다.
str.split(" "); // - ["How", "are", "you”, "doing?"]

// \s는 여러 가지 공백 문자(스페이스, 탭 등)를 의미한다. 즉, [\t\r\n\v\f]와 같은 의미다.
str.split(/\s/); // — ["How", "are", "you", "doing?"]
// 인수로 빈 문자열을 전달하면 각 문자를 모두 분리한다.

str.split("");
// - ["H", "o", V, " ", "a", "r", "e", " ", "y", "o", "u", " ", "d", "o", "i", "n", "g", "?”]
// 인수를 생략하면 대상 문자열 전처B 단일 요소로 하는 바/열을 반환한다.
str.split(); // — ["How are you doing?"]
```

```js
// 인수로 전달받은 문자열을 역순으로 뒤&는다.
function reverseString(str) {
  return str.split("1").reverse().join("");
}
reverseString("Hello world!"); // — ' idlrow olleH'
```
