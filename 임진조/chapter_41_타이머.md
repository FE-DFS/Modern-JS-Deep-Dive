# 타이머

## 호출 스케줄링

함수를 명시적으로 호출하면 함수가 즉시 실행된다.
명시적 호출하지 않고 일정 시간이 경과된 후 함수 호출을 예약하려면 타이머 함수를 사용해야 하며 이를 호출 스케줄링이라 한다.

자바스크립트 엔진은 싱글 스레드이기 때문에 두가지 작업을 동시에 진행할 수 없으며 이를 비동기 처리방식으로 동작시켜야 한다.

```js
setTimout(() => console.log("Hi"), 1000); // 1초 후 타이머가 만료되면 함수 호출

const timerId = setTimout((name) => console.log(`Hi ${name}.`, 1000, "Lee")); // 콜백함수에 Lee가 인수로 등록된다.

clearTimeout(timerId); // 타이머 취소
```

## 디바운스와 스로틀

짧은 시간 간격으로 연속해서 발생하는 이벤트를 그룹화 해서 과도한 이벤트 호출을 방지하는 프로그래밍 기법

```js
const debounce = (callback, delay) => {
  let timerId;
  return (...arg) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, ...args);
  };
};

const torottle = (callback, delay) => {
  let timerId;
  return (...arg) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback(...args);
      timerId = null;
    }, delay);
  };
};
```

### 스로틀

스로틀은 짧은 간격으로 연속해서 발생하는 이벤트를 그룹화해서 일정 시간 단위로 이벤트 핸들러가 호출되게 만든다.
