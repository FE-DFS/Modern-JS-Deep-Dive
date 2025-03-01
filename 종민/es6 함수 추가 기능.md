## 함수 구분

es6 이전 함수는 생성자 함수, 일반 함수로도 호출할 수 있어서 구분이 없어 샐수 가능성이 생긴다.

메서드 역시 생성자 함수로 호출할 수 있는데 이는 문법상 가능하지만 흔치 않다. 그러므로 불필요한 프로토타입 객체를 생성한다. 그리고 콜백함수도 constructor이기 때문에 또 프로토타입 객체를 생성한다.

## 메서드

메서드: 축약형 표현된 메서드를 의미

```js

const obj = {
    x:1

    //메서드
    //인스턴스를 생성할 수 없는 non-constructor다.
    //prototype 프로퍼티가 없다.
    foo(){return this.x}

    //일반함수
    bar: function(){return this.x}
}
```

표준 빌드인 객체가 제공하는 프로토타입 메서드와 정적 메서드는 모두 non-constructor다.

ES6 메서드는 자신을 바인딩한 객체를 가리키는 내부 슬롯 [[Homeobject]]를 갖는다. super 참조는 내
부 슬롯 [[HomeObject]]를 사용하여 수퍼클래스의 메서드를 참조하므로 내부 슬롯 [ [HomeObject] ]를 갖는
ES6 메서드는 super 키워드를 사용할 수 있다.

## 화살표 함수

콜백으로 사용할 때 유용하다.

- 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor다.
- 중복된 매개변수 이름을 선언할 수 없다
- 화살표 함수는 함수 자체의 this, arguments, super, new. target 바인딩을 갖지 않는다. 스코프 체인을 통해 상위 스크코프의 this, arguments, super, new.target을 참조한다.
- -> 콜백 함수 때 유용 -> lexical this(렉시 컬 스코프와 같이 화살표 함수의 this가 함수가 정의된 위치에 의해 결정된다는 것을 의미한다) -> 화살표가 중첩이면 this가 나올 때까지 올라간다.

## rest

...rest
Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.

Rest 파라미터는 반드시 마지막 파라미터 이어야 한다.

단 하나만 선언할 수 있다.

```js
function bar(param1, param2, ...rest) {}
```

화살표 함수는 함수 자체의 arguments 객체를 갖지 않는다. 따라서 화살표 함수로 가변 인자 함수를 구현해야 할 때는 반드시 Rest 파라미터를 사용해야 한다.
