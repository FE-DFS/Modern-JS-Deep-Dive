# 18 함수와 일급 객체

일급 객체

- 무명의 리터럴로 생성할 수 있다. 런타임에 생성이 가능하다
- 변수나 자료구조(객체, 배열)에 저장할 수 있다
- 함수의 매개변수로 전달할 수 있다
- 함수의 반환값으로 사용할 수 있다

```js
const increase = function (num) {
  return ++num;
};

const auxs = { increase };

function makeCounter(aux) {
  let num = 0;

  return function () {
    num = aux(num);
    return num;
  };
}

const increaser = makeCounter(auxs.increase);
consol.log(increaser()); // 1
consol.log(increaser()); // 2
```

## 함수 객체의 프로퍼티

arguments 프로퍼티
arguments 객체: 함수 호출 시 전달된 인수(argument)들의 정보를 담고 있는 순회가능(iterable) 유사 배열 객체, 함수 내부에서 지역 변수처럼 사용

선언된 매개변수보다 인수를 적게 전달했을 경우 인수가 전달되지 않지만 버려지지 않고 argument 객체에 저장된다.
