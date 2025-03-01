### 표준 빌트인 객체 String

#### 1. String 생성자 함수

String 객체는 원시 타입인 문자열을 다룰 때 유용한 프로퍼티와 메서드를 제공합니다.

```js
// String 생성자 함수
const strObj = new String("hello");
console.log(strObj); // String {'hello'}

// 문자열 원시값
const str = "hello";
console.log(str); // hello
```

#### 2. 유용한 String 메서드 활용

##### 2.1 문자열 검색과 추출

```js
const email = "user@example.com";

// includes로 이메일 형식 확인
const isValidEmail = email.includes("@") && email.includes(".");
console.log(isValidEmail); // true

// substring으로 도메인 추출
const domain = email.substring(email.indexOf("@") + 1);
console.log(domain); // 'example.com'
```

##### 2.2 문자열 변환과 정리

```js
// 사용자 입력 정리
const userInput = "   Hello, World!   ";
const cleanInput = userInput.trim().toLowerCase();
console.log(cleanInput); // 'hello, world!'

// 파일 확장자 추출
const filename = "document.pdf";
const extension = filename.slice(filename.lastIndexOf(".") + 1);
console.log(extension); // 'pdf'
```

##### 2.3 문자열 분할과 결합

```js
// CSV 데이터 처리
const csvData = "apple,banana,orange";
const fruits = csvData.split(",");
console.log(fruits); // ['apple', 'banana', 'orange']

// URL 경로 생성
const path = ["users", "123", "profile"];
const url = "/" + path.join("/");
console.log(url); // '/users/123/profile'

// 문장을 단어로 분할하고 필터링
const sentence = "The quick   brown fox   jumps";
const words = sentence.split(/\s+/).filter((word) => word.length > 0);
console.log(words); // ['The', 'quick', 'brown', 'fox', 'jumps']

// 날짜 문자열 파싱
const dateStr = "2024-03-15";
const [year, month, day] = dateStr.split("-");
console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);
// Year: 2024, Month: 03, Day: 15

// 이메일 주소 분석
const emailAddress = "user.name@example.com";
const [username, domain] = emailAddress.split("@");
const [localPart, topDomain] = domain.split(".");
console.log(username, localPart, topDomain); // 'user.name' 'example' 'com'
```

##### 2.4 문자열 대체

```js
// 템플릿 문자열 만들기
const template = "Hello, {name}! Your age is {age}.";
const userData = {
  name: "John",
  age: 25,
};

const message = template
  .replace("{name}", userData.name)
  .replace("{age}", userData.age);
console.log(message); // 'Hello, John! Your age is 25.'
```

##### 2.5 문자열 패딩

```js
// 숫자 포맷팅
const number = "42";
const formattedNumber = number.padStart(4, "0");
console.log(formattedNumber); // '0042'

// 신용카드 번호 마스킹
const cardNumber = "1234567890123456";
const lastFour = cardNumber.slice(-4).padStart(16, "*");
console.log(lastFour); // '************3456'
```
