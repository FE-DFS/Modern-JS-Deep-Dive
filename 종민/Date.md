# Date

표준 빌트인 객체인 Date는 날짜와 시간（연, 월, 일, 시, 분, 초, 밀리초（millisecond/ms. 천분의 1초））을 위한 메서드를 제공하는 빌트인 객체이면서 생성자 함수다.

- UCT: 국제 표준시
- KST 한국 표준시 UCT + 9시간

## 생성자 함수 Date

Date 생성자 함수로 생성한 Date 객체는 내부적으로 날짜와 시간을 나타내는 정수값을 갖는다. 이 값은 1970년 1월 1일 00：00：00（UTC）을 기점으로 Date 객체가 나타내는 날짜와 시간까지의 밀리초를 나타낸다. 예를 들어, 모든 시간의 기점인 1970년 1월 1일 0시를 나타내는 Date 객체는 내부적으로 정수값 0을 가지며, 1970년 1 월 1일 0시를 기점으로 하루가 지난 1970년 1월 2일 0시를 나타내는 Date 객체는 내부적으로 정수값 86,400,000（24h _ 60m _ 60s 大 1000ms）을 갖는다.

### 생성 방법

#### new Date()

```js
// 현재 날짜와 시간
new Date();
Date();
```

#### new Date(milliseconds)

1970년 1월 1일 00：00：00(UTC)을 기점으로 인
수로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체를 반환

```js
// 한국 표준시 쯔t는 협정 세계시 UTC에 9시간을 더한 시간이다.
new Date(0); // - Thu Jan 01 1970 09:00:00 GMT+0900 (대한민국 표준시)
new Date(86400000); // - Fri Jan 02 1970 09:00:00 GMT+0900 (대한민국 표준시)
```

#### new Date(dateString)

날짜와 시간을 나타내는 문자열을 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환

인수로 전달한문자열은 Date.parse 메서드에 의해 해석 가능한 형식이어야 한다

```js
 new Date('May 26, 2020 10:00:00')；
II - Tue May 26 2020 10:00:00 GMT+0900 (대한민국 표준시)
 new Date('2020/03/26/10：00：00');
 // - Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)
```

#### new Date(year, month[, day, hour, minute, second, millisecond])

Date 생성자 함수에 연, 월, 일, 시, 분, 초, 밀리초를 의미하는 숫자를 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환한다. 이때 연, 월은 반드시 지정해야 한다. 지정하지 않은 옵션 정보는 0 또는 1로 초기화된다. 인수는 다음과 같다.

- year: 연을 나타내는 1900년 이후의 정수. 0부터 99는 1900부터 1999로 처리된다
- month: 월을 나타내는 0 ~ 11까지의 정수(주의: 0부터 시작, 0 = 1월)
- day: 1~31
- hour: 0~23
- minute: 0~59
- second: 0~59
- second: 0~999

```js
// 월을 나타내는 2는 3월을 의미한다. 2020/3/1/00：00：00：00
 new Date（2020, 2）;
 // - Sun Mar 01 2020 00:00:00 GMT+0900（'대한민국 표준시）
// 월을 나타내는 2는 3월을 의미한다. 2020/3/26/10：00：00：00
 new Date（2020, 2, 26, 10, 00, 00, 0）;
 // - Thu Mar 26 2020 10:00:00 GMT+0900 （대한민국 표준시）
// 다음처럼 표현하면 가독성이 훨씬 좋다.
 new Date（'2020/3/26/10：00：00：00'）；
// - Thu Mar 26 2020 10:00:00 GMT+0900 （대한민국 표준시）
```

## Date 메서드

- Date.now: 1970년 1 월 1일 00：00：00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환
- Date.parse: 1970년 1 월 1 일 00：00：00(UTC)을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환.
- Date.UTC: 1970년 1 월 1 일 00：00：00(UTC)을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환
- Date.prototype.getFullYear: Date 객체의 연도를 나타내는 정수를 반환
  ```js
  new Date("2020/07/24").getFullYear(); // — 2020
  ```
- Date.prototype.setFullYear: Date 객체에 연도를 나타내는 정수를 설정
  ```js
  const today = new Date();
  // 년도 지정
  today.setFullYear(2000);
  today.getFullYear(); // — 2000
  // 년도/월/일 지정
  today setFullYear(1900, 0, 1);
  today.getFullYear(); // — 1900
  ```
- Date.prototype.getMonth: Date 객체의 월을 나타내는 0 〜 11의 정수를 반환한다. 1월은 0. 12월은 11이다.
- Date.prototype.setMonth: Date 객체에 월을 나타내는 0 〜 11의 정수를 설정한다. 1월은 0. 12월은 11이다. 월 이외에 옵션으로 일도 설정할 수 있다
- Date.prototype.getDate: Date 객체의 날짜(1 ~ 31)를 나타내는 정수를 반환
- Date.prototype.setDate: Date 객체에 날짜(1 ~ 31)를 나타내는 정수를 설정
- Date.prototype.getDay: Date 객체의 요일(0 〜 6)을 나타내는 정수를 반환
  ```js
  new Date("2020/07/24").getDay(); // — 5
  //일===0, 월===1,화===2 ...
  ```
- Date.prototype.getHours: Date 객체의 시간(0 〜 23)을 나타내는 정수를 반환
- Date.prototype.setHours: Date 객체에 시간(0 ~ 23)을 나타내는 정수를 설정, 시간 이외에 옵션으로 분, 초, 밀리초도 설정할 수 있다.
- Date.prototype.getMinutes: Date 객체의 분(0 〜 59)을 나타내는 정수를 반환
- Date.prototype.setMinutes: Date 객체에 분(0 〜 59)을 나타내는 정수를 설정, 분 이외에 옵션으로 초. 밀리초도 설정할 수 있다
- Date.prototype.getSeconds: Date 객체의 초(0 ~ 59)를 나타내는 정수를 반환
- Date.prototype.setSeconds: Date 객체에 초(0 ~ 59)를 나타내는 정수를 설정한다. 초 이외에 옵션으로 밀리초도 설정할 수 있다.
- Date.prototype.getMilliseconds: Date 객체의 밀리초(0 ~ 999)를 나타내는 정수를 반환
- Date.prototype.setMilliseconds: Date 객체에 밀리초(0 〜 999)를 나타내는 정수를 설정
- Date.prototype.getTime: 1970년 1 월 1 일 00：00：00(UTC)를 기점으로 Date 객체의 시간까지 경과된 밀리초를 반환
- Date.prototype.setTime:Date 객체에 1970년 1 월 1 일 00：00：00(UTC)를 기점으로 경과된 밀리초를 설정
- Date.prototype.getTimezoneOffset: UTC와 Date 객체에 지정된 로캘 시간과의 차이를 분 단위로 반환
  ```js
  const today = new Date(); // today의 지정 로캘은 KST다.
  //UTC와 today의 지정 로캘 KST와의 차이는 -9시간이다.
  today.getTimezoneOffset() / 60; // -9
  ```
- Date.prototype.toDateString: 사람이 읽을 수 있는 형식의 문자열로 Date 객체의 날짜를 반환
- Date.prototype.toTimeString: 사람이 읽을 수 있는 형식으로 Date 객체의 시간을 표현한 문자열을 반환
- Date.prototype.toISOString: ISO 86013 형식으로 Date 객체의 날짜와 시간을 표현한 문자열을 반환
- Date.prototype.toLocaleString: 인수로 전달한 로캘을 기준으로 Date 객체의 날짜와 시간을 표현한 문자열을 반환한다. 인수를 생략한 경우 브라우저가 동작 중인 시스템의 로캘을 적용
- Date.prototype.toLocaleTimeString:인수로 전달한 로캘을 기준으로 Date 객체의 시간을 표현한 문자열을 반환한다. 인수를 생략한 경우 브라우저가 동작 중인 시스템의 로캘을 적용한다.

## 시계 예제

```js
function printNow() {
  const today = new Date();
  const dayNames = [
    "(일요일)",
    "(월요일)",
    "(화요일)",
    "(수요일)",
    "(목요일)",
    "(금요일)",
    "(토요일)",
  ];
  const day = dayNames[today.getDay()];
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour >= 12 ? "PM" : "AM";

  // 12시간제로 변경
  hour %= 12;
  hour = hour || 12; // hour가 0이면 12를 재할당

  // 10 미만인 분과 초를 2자리로 변경
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}：${second} ${ampm}`;
  return now;
}

(function () {
  setTimeout(() => {
    console.log(printNow());
  }, 1000);
})();
```
