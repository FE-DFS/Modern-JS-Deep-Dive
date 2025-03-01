## 자바스크립트 실행 컨텍스트와 Lexical Environment

### 1. 실행 컨텍스트 생성 단계

자바스크립트 엔진은 코드 실행 전 전역 객체 생성과 실행 컨텍스트 초기화를 수행합니다.

---

### 2. 전역 실행 컨텍스트 (Global Execution Context) 생성

#### (1) 전역 객체 생성

- 브라우저 환경: `window` 객체 생성 (Node.js는 global)
- 전역 객체의 속성: `Math`, `console`, `setTimeout` 등 빌트인 객체 포함
- 예제 코드의 `const x = 1`과 `function foo()`는 아직 메모리에 등록되지 않은 상태

#### (2) 전역 코드 평가 (Global Code Evaluation)

- 전역 렉시컬 환경 (Global Lexical Environment) 생성:

```js
GlobalLexicalEnvironment = {
  EnvironmentRecord: {
    // 1. **Global Environment Record** (전역 환경 레코드)
    // - **Object Environment Record**: `var` 변수, 함수 선언을 `window`에 바인딩
    // - **Declarative Environment Record**: `const`, `let`, 클래스 등 전역 스코프의 선언 저장
    [[ObjectRecord]]: {
      type: "Object",
      bindings: window, // `var` 변수는 여기에 연결
    },
    [[DeclarativeRecord]]: {
      type: "Declarative",
      bindings: {
        x: <uninitialized>, // TDZ (Temporal Dead Zone)
        foo: <func reference>, // 함수 선언은 즉시 할당
      },
    },
    [[GlobalThisValue]]: window, // 전역 `this` 바인딩
  },
  OuterLexicalEnvironmentReference: null, // 외부 환경 참조 없음
};
```

- 핵심 과정:
  1. `var` 선언 → Object Environment Record에 연결 (예제에는 `var` 없음).
  2. `const x`, `function foo` → Declarative Environment Record에 등록.
  3. foo 함수는 즉시 메모리 할당되지만, x는 TDZ로 초기화 전 접근 불가.

---

### 3. 전역 코드 실행 (Global Code Execution)

- `const x = 1` 실행 → Declarative Environment Record의 `x` 값이 `1`로 초기화.
- `foo() 호출` → 새 함수 실행 컨텍스트 (Function Execution Context) 생성.

---

### 4. foo() 함수 실행 컨텍스트 생성

- 렉시컬 환경 구조:

```js
fooLexicalEnvironment = {
  EnvironmentRecord: {
    type: "Declarative", // **Declarative Environment Record**
    bindings: {
      y: <uninitialized>, // TDZ
      bar: <func reference>,
    },
  },
  OuterLexicalEnvironmentReference: GlobalLexicalEnvironment, // 외부 참조
  ThisBinding: window, // 일반 함수이므로 `this`는 전역 객체
};
```

- 실행 단계: 1.` y = 2` 할당 → `y`가` 2`로 초기화. 2. `bar()` 호출 → 새 실행 컨텍스트 생성.

### 5. `bar()` 함수 실행 컨텍스트 생성

- 렉시컬 환경 구조:

```js
barLexicalEnvironment = {
  EnvironmentRecord: {
    type: "Declarative",
    bindings: {
      z: <uninitialized>,
    },
  },
  OuterLexicalEnvironmentReference: fooLexicalEnvironment, // 외부 참조
  ThisBinding: window,
};
};
```

- 실행 단계:

  1. `z = 3` 할당 → `z`가 `3`으로 초기화.
  2. `console.log(x + y + z)` 실행:

- 스코프 체인 탐색:
  - `z` → `barLexicalEnvironment`에서 `3` 발견.
  - `y` → `fooLexicalEnvironment`에서 `2` 발견.
  - `x` → `GlobalLexicalEnvironment`에서 `1` 발견.

### 6. 블록 렉시컬 환경 (Block Lexical Environment)

- {} 블록 내부에 let, const 선언이 있을 때 생성됩니다.
- 예제에는 블록이 없지만, 아래 코드가 추가되었다면:

```js
if (true) {
  const blockVar = 10;
  console.log(blockVar); // 10
}
```

- `Block Lexical Environment`가 생성되며, `blockVar`은 블록 내에서만 접근 가능.

### 7. 실행 컨텍스트 스택 및 라이프사이클

| 단계           | 스택 상태 (Bottom → Top) | 활성화된 EC              |
| -------------- | ------------------------ | ------------------------ |
| **초기**       | `[Global]`               | Global Execution Context |
| **foo() 호출** | `[Global → foo]`         | foo Execution Context    |
| **bar() 호출** | `[Global → foo → bar]`   | bar Execution Context    |
| **bar() 종료** | `[Global → foo]`         | foo Execution Context    |
| **foo() 종료** | `[Global]`               | Global Execution Context |

### 8. 렉시컬 환경의 핵심 구성 요소

#### (1) 환경 레코드 (Environment Record)

| 타입                               | 설명                                                                          |
| ---------------------------------- | ----------------------------------------------------------------------------- |
| **Declarative Environment Record** | `const`, `let`, `class`, 함수 선언 저장. TDZ 적용됨                           |
| **Object Environment Record**      | `var` 변수, 함수 선언을 객체(`window` 또는 `globalThis`)에 바인딩. TDZ 미적용 |

#### (2) 외부 렉시컬 환경 참조 (OuterLexicalEnvironmentReference)

스코프 체인을 구현합니다.
예제에서 bar의 외부 참조는 foo의 렉시컬 환경을 가리키며, foo는 전역을 참조합니다.

#### (3) `[[GlobalThisValue]]`

`[[GlobalThisValue]]`
전역 실행 컨텍스트에서 this는 window 객체로 고정됩니다.
