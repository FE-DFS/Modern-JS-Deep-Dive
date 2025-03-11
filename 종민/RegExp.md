# RegExp: 정규 표현식

일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어.

정규 표현식은 문자열을 대상으로 패턴 매칭 기능을 제공

## 생성

```js
const target = "Is this all there is?";
// 패턴: is
// 플래그: i => 대소문자를 구별하지 않고 검색.
const regexp = /is/i;
const regexp = new RegExp("is", "i");
const regexp = new RegExp(/is/, "i");
const regexp = new RegExp(/is/i); // ES6

// test 머/서드는 target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여 매칭 결과를
// 불리언 값으로 반환한다.
regexp.test(target); // — true
```

## 메서드

### RegExp.prototype.exec

exec 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환

exec 메서드는 문자열 내의 모든 패턴을 검색하는 g 플래그4를 지정해도 첫 번째 매칭 결과만 반환하므로 주
의

```js
const target = "Is this all there is?";
const regExp = /is/;
regExp.exec(target);
// —> [index: 5, input: "Is this all there is?", groups: undefined]
```

### RegExp.prototype.test

test 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언 값으로
반환

```js
const target = "Is this all there is?";
const regExp = /is/;
regExp.test(target);
// —> true
```

### String.prototype.match

exec과 같지만 g 플래그인 경우 모든 매칭 결과를 배열로 반환한다.

## 플래그

- i: 대소문자 구분 없음
- g: 패턴과 일치하는 모든 문자열 전역 검사
- m: 문자행이 바뀌어도 패턴 계속 검색

## 패턴 검색

/ 으로 열고 닫으며 문자열 따옴표는 생략

### 임의 문자열 검색

```js
const target = "Is this all there is?";
// 임의의 3자리 문자열을 대소문자를 구별하여 전역 검색한다.
const regExp = /.../g;
target.match(regExp); // — ["Is ", "thi", "s a", "ll", "the", "re ", "is?"]
```

### 반복 검색

```js
const target = "A AA B BB Aa Bb AAA";
// 'A’가 최소 1번, 최대 2번 반복돠는 문자열을 전역 검색한다.
const regExp = /A{1,2}/g;
target.match(regExp); // - ["A", "AA", "A", "AA", "A"]

// ‘A’가 2번 반복돠는 문자열을 전역 검색한다.
const regExp = /A{2}/g;
target.match(regExp); // — ["AA", "AA"]

// ’A’가 촤소 2번 이상 반복되는 문자열을 전역 검색한다
const regExp = /A{2,}/g;
target.match(regExp); // — f"AA", "AAA"]

// ’A'가 최소 한 번 이상 반복돠는 문자열('A, 'M', 'W', ... )을 전역 검색한다.
const regExp = /A+/g;
target.match(regExp); // — ["A", "AA", "A", "AAA"]
```

```js
const target = 1 color colour'；
// ’colo‘ 다음 'u'가 최대 한 번(0번 포함) 이상 반복되고 ’r'이 이어자는
// 문자열 ‘color’, 'colourw 전역 검색한다.
 const regExp = /colou?r/g;
 target.match(regExp); // — ["color", "colour"]
```

### OR 검색

```js
const target = "A AA B BB Aa Bb";
// 'A' 또는 'B‘를 전역 검색한다.
const regExp = /A|B/g;
target.match(regExp); // — f"A", "A”, "A", "B", "B", "B", "A", "B"]

// 'A’ 또는 ’B’가 한 번 이상 반복돠는 문자열을 전역 검색한다.
// 'A', 'AA', 'W', ... 또는 'B', 'BB', ...
const regExp = /[AB]+/g;
target.match(regExp); // - ["A", "M", "B", "BB", "A", "B"]

// 'A‘ ~ 'Z'가 한 번 이상 반복되는 문자열을 전역 검색한다.
// 'A', 'AA', 'MA', ... 또는 'B', 'BB', 'BBB', ... ~ 또는 'Z', 'ZZ', 'ZZZ', ...
const regExp = /[A-Z]+/g;
target.match(regExp); // — ["A", "AA", "BB", "ZZ"f "A", "B"]

// 'A’ ~ 'Z' 또는 'a’ ~ ’z‘가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /[A-Za-z]+/g;
target.match(regExp); // - ["AA", "BB", "Aa", "Bb"]
```

```js
const target = "aa bb 12,36";
// ’0‘ ~ ’9’ 또는 ’, ’가 한 번 이상 반복되는 문자열을 전역 검색한다.
let regExp = /[\d,]+/g;
target.match(regExp); // — ["12,345"]
// ’0’~'9‘가 아닌 문자(숫자가 아닌 문자) 또는 ’，’가 한 번 이상 반복되는 문자열을 전역 검색한다.
regExp = /[\D,]+/g;
target.match(regExp); // — ["AA BB ", ","]
```

```js
const target = "Aa Bb 12,3A5 _$%&";
// 알파벗', 숫자, 언더스코어, '가 한 번 이상 반복되는 문자열을 전역 검색한다.
let regExp = /[\w,]+/g;

target.match(regExp); // — ["Aa", "Bb", "12,345",
// 알파벳, 숫자, 언더스코어가 아닌 문자 또는 '，'가 한 번 이상 반복되는 문자열을 전역 검색한다.
regExp = /[\W,]+/g;
target.match(regExp); // — [" ", " "," $%&"]
```

### NOT 검색

[]내 ^은 not의 의미를 갖는다. \D는 [^0-9]와 같다.

```js
const target = "AA BB 12 Aa Bb";
// 숫자를 제외한 문자열을 전역 검색한다.
const regExp = /[A0-9]+/g;
target.match(regExp); // — ["AA BB ", " Aa Bb"]
```

### 시작 위차로 검색

[ ] 밖의 ^ 문자열의 시작을 의미

```js
const target = "https://poiemaweb.com";
// https로 시작하는지 검사한다.
const regExp = /^https/;
regExp.test(target); // — true
```

### 마지막 위치로 검색

- $는 문자열의 마지막을 의미.

```js
const target = "https://poiemaweb.com";
// ’com’으로 끝나는지 검사한다.
const regExp = /com$/;
regExp.test(target); // — true
```

## 자주 사용하는 정규표현식

```js
// http://또는 https://로 시작하는지 검사한다.
/^https?:\/\//.test(url);

// html로 끝나는지 검사한다.
/html$/.test(fileName);

// 숫자로만 이루어진 문자열인지 검사한다.
/^\d+$/.test(target);

// 하나 이상의 공백으로 시작하는지 검사한다.
/^[\s]+/.test(target); // — true

// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~10자리인；지 검사한다.
/^[A-Za-z0-9]{4,10}$/.test(id);

//이메일 형식 검사
/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
  email
);

//phone number
/^\d{3}-\d{3,4}-\d{4}$/.test(cellphone);

//특수문자
/[^A-Za-z0-9]/gi.test(target);

// 특수 문자를 제거한다.
target.replace(/[^A-Za-z0-9]/gi, "");
```
