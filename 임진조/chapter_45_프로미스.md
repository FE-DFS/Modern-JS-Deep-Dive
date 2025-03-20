## 비동기 처리를 위한 콜백 패턴의 단점

api에서 특정 id를 가지고와서 해당 id 값으로 다시 새로운 api호출과 같은 방식을 중첩해서 사용한다면
콜백이 계속해서 중첩되고 콜벡 헬이 발생

에러처리의 문제
에러는 호출자 방향으로 전파되기 때문에 비동기처리의 경우에 콜백의 호출자는 콜 스택에서 팝된 상태기 때문에 try catch문에서 정상적으로 에러가 걸리지 않는 문제

# 프로미스

프로미스는 resolve, reject 함수를 전달 받아 비동기처리에 성공하면 resolve함수를 실패하면 reject 함수를 처리한다.

프로미스의 상태는
pending, fulfilled, rejected 상태가 있다.

pending : 비동기 처리가 아직 수행되지 않는 상태 -> 생성 직후

settled 상태
fulfilled : 비동기 처리가 수행된 상태(성공) -> resolve 호출, value 값을 가짐
rejected : 비동기 처리가 수행된 상태(실패) -> reject 호출, error 객체를 가짐

## Promise.prototype.then

arg1 : fulfilled 상태가 되면 호출
arg2 : rejected 상태가 되면 호출

## Promise.prototype.catch

rejected 상태인 경우만 호출

```js
then((_, rejected) => rejected()); // 같음
```

## Promise.prototype.finally

성공, 실패와 상관없이 무조건적으로 실행

## 프로미스 에러처리

가독성은 catch메서드를 사용하는 것이 가장 좋다.
또한 then메서드의 두번째 콜백은 이전은 프로미스에서 발생한(체이닝 시)에러는 잡을 수 없기 때문에 가급적이면 catch를 사용하자.

## 마이크로태스크 큐

프로미스 후속 처리 메서드는 마이크로 태스크 큐에 저장
태스크큐보다 우선순위가 높다.

## fetch(url, [, options])

HTTP 응답을 나타내는 Response 객체를 래핑한 Promise 객체를 반환한다.
Response.prototype.json을 사용하면 역직렬화 가능
기본적으로 404등을 받아도 rejected가 실행되지 않고 response.ok에 true, false로 판단
