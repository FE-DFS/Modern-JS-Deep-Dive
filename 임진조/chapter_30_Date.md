### Date

UTC(협정 세계시)는 1970년 1월 1일 0시 0분 0초를 기점으로 현재까지의 시간을 밀리초로 표현한 것이다.
GMT라고도 부른다.
KST는 한국 표준시로 +9시간 차이가 난다.

- `new Date()`
- new Date(year, month, day, hour, minute, second, millisecond)
- ex) new Date('2025/02/16/20:23:15:300')

#### Date를 활용한 예제

```js
(function printNow() {
  const today = new Date();

  const dayNames = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  // getDay() 메서드는 0부터 6까지의 숫자를 반환한다.
  const day = dayNames[today.getDay()];

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour >= 12 ? "오후" : "오전";
  hour %= 12;
  hour = hour || 12; // 0시는 12시로 변환
  // 10 미만인 분과 초를 2자리로 변환
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  const now = `${year}년 ${month}월 ${date}일 ${day}요일 ${ampm} ${hour}:${minute}:${second}`;
  console.log(now);
  setTimeout(printNow, 1000);
})();
```
