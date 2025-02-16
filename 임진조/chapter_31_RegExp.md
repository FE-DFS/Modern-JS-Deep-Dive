### 정규 표현식

정규 표현식은 문자열에서 특정 패턴을 찾아내는 표현식이다.
정규 표현식은 패턴매칭 기능을 제공한다.

// 휴대폰 번호 형식

```js
const tel = "010-1234-5678";
const regExp = /^\d{3}-\d{4}-\d{4}$/;
regExp.test(tel); // false
```

// 이메일 형식

```js
const email = "test@example.com";
const regExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
```

#### 정규 표현식 메서드

정규 표현식 메서드는 정규 표현식을 사용하여 문자열을 조작하는 메서드이다.

##### `RegExp.prototype.exec`

`exec` 메서드는 정규 표현식에 일치하는 문자열을 검색하고 반환한다.
g 플레그를 지정해도 첫 번째 일치 결과만 반환한다.

```js
const regExp = /is/;
const str = "Is this all is?";

regExp.exec(str); // ['is', index: 5, input: 'Is this all is?', groups: undefined]
```

##### `String.prototype.match`

`match` String 표준 빌트인 객체가 제공하는 메서드는 대상 문자열과 인수로 전달받은 정규 표현식의 패턴을 검색하여 결과를 배열로 반환한다.

```js
const regExp = /is/;
const str = "Is this all is?";

str.match(regExp); // ['is', index: 5, input: 'Is this all is?', groups: undefined]
```

#### `RegExp.prototype.test`

`test` 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 결과를 불리언 값으로 반환한다.

#### 플레그

| 플래그 | 의미        | 설명                                                           |
| ------ | ----------- | -------------------------------------------------------------- |
| i      | Ignore case | 대소문자를 구별하지 않고 패턴을 검색한다                       |
| g      | Global      | 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다 |
| m      | Multiline   | 문자열의 행이 바뀌더라도 패턴 검색을 계속한다                  |
