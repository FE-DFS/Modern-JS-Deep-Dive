# this

메서드가 자신이 속한 객체의 프로퍼티를 참조하고 변경할 수 있어야 한다. 그러기 위해서 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.

this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수self-referencing variable다. this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.

### 동적 바인딩

this는 전역이나 일반 함수 내부에서 내부에서는 전역 객체(strict mode에서는 일반 함수 내부 this는 undefined), 메서드 내부는 호출한 객체를, 생성자 함수 내부에서는 생성할 객체를 의미한다.

## 함수 호출 방식

- 일반함수 호출
- 메서드 호출
- 생성자 함수 호출
- Function.prototype.apply/call/bind로 간접 호출

### 일반 함수 호출

일반 함수로 호출되면 기본적으로 this는 전역 객체가 바인딩 된다. 객체 내 프로퍼티와 메서드에 접근하기 위해 존재하는 this이기 때문에 의미는 없다.

콜백 함수도 일반 함수로 호출되면 this가 전역 객체, 그러나 this를 자신이 속한 객체를 가리키고 싶으면 바인딩을 잘 해주어야 한다.

```js
var value = 1;
const obj = {
    value: 100,
    foo() {
        // this 바인딩(obj)을 변수 that에 할당한다.
        const that = this;
        // 콜백 함수 내부에서 this 대신 that을 참조한다.
        setTimeout(function () {
            console.log(that.value); // 100
        }, 100)；
        // 콜백 함수에 명시적으로 this를 바인딩한다.
        setTimeout(function () {
            console.log(this.value); // 100
        }.bind(this), 100)
        // 화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다.
        setTimeout(() => console.log(this.value), 100); // 100
    }
}；
obj.foo();
```

### 메서드 호출

메서드를 호출한 객체를 의미한다.

### 생성자 함수 호출

미래에 생성할 인스턴스가 바인딩된다.

### Function. prototype.apply/call/bind 메서드에 의한 간접 호출

Function.prototype.apply. Function.prototype.call 메서드는 this로 사용할 객체와 인수 리스트를 인수로 전달받아 함수를 호출한다.

```js
 function getThisBinding() {
return this;
 }
 // this로 사용할 객체
const thisArg = { a： 1 };
 console.log(getThisBinding());
// window

 // getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
 console.log(getThisBinding.apply(thisArg)); // {a: 1}
 console.log(getThisBinding.call(thisArg)); // {a： 1}

```

call, apply는 함수를 호출하고 첫번 째 인자로 this에 바인딩할 객체를, 두 번째는 함수에 넣어줄 인자를 넣어준다.

bind는 첫 번째 인수로 전달한 값으로 this 바인딩이 교체된 함수를 새롭게 생성해 반환한다

#### 콜백 함수 this 일치 시키는 법

콜백 this가 문맥과 달라지는 경우

```js
const person = {
  name: "JongMin",
  foo(callback) {
    setTimeout(callback, 100);
  },
};
person.foo(function () {
  console.log(`Hi! my name is ${this.name}`);
  // ② Hi! my name is .
  // 일반 함수로 호출된 콜백 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.
  // 브라우저 환경에서 window, name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ’ ’ 이다.
  // Node.js 환경에서 this.name은 undefined〔자.
});
```

방법

```js
const person = {
name: 'Lee',
foo(callback) {
 // bind 메서드로 callback 함수 내부의 this 바인딩을 전달
setTimeout(callback.bind(this), 100);
 }
}；
person.foo(function () {
console.log(`Hi! my name is ${this.name}`)// Hi! my name is Lee.
 })；
```
