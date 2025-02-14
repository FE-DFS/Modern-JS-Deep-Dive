class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.

  //getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  // setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
}

const me = new Person("Chae", "JongMin");
// 더/이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(`${me.firstName} ${me.lastName}`); // Chae JongMin

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
me.fullName = "CHAE JONGMIN";
console.log(me); // {firstName: "CHAE", lastName: "JONGMIN"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 잡근하면 getter 함수가 호출된다.
console.log(me.fullName); // CHAE JONGMIN

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(me, "fullName"));
// {get: f, set: f, enumerable: true, configurable: true}
