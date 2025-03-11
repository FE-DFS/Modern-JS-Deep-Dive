# 이벤트

## 이벤트 드리븐 프로그래밍

프로그램 흐름을 이벤트 중심으로 제어하는 방식

이벤트 핸들러: 이벤트가 발생했을 때 호출될 함수
이벤트 핸들러 등록: 이벤트가 발생했을 때 브라우저에게 이벤트 핸들러 호출을 위임

## 이벤트 타입

# 📌 자바스크립트 이벤트 타입 및 발생 시점

## 마우스 이벤트

| 이벤트 타입   | 발생 시점                                                      |
| ------------- | -------------------------------------------------------------- |
| `mousedown`   | 마우스 버튼을 누를 때                                          |
| `mouseup`     | 마우스 버튼을 뗄 때                                            |
| `click`       | 마우스 버튼을 눌렀다가 뗄 때 (`mousedown` → `mouseup` 후 발생) |
| `dblclick`    | 마우스를 빠르게 두 번 클릭할 때                                |
| `mousemove`   | 마우스를 움직일 때                                             |
| `mouseenter`  | 마우스가 특정 요소에 들어갈 때 (버블링 없음)                   |
| `mouseleave`  | 마우스가 특정 요소에서 나갈 때 (버블링 없음)                   |
| `mouseover`   | 마우스가 특정 요소 위로 올라갈 때 (버블링 있음)                |
| `mouseout`    | 마우스가 특정 요소에서 벗어날 때 (버블링 있음)                 |
| `contextmenu` | 마우스 오른쪽 버튼을 클릭할 때 (컨텍스트 메뉴 열림)            |

## 키보드 이벤트

| 이벤트 타입               | 발생 시점                                                                     |
| ------------------------- | ----------------------------------------------------------------------------- |
| `keydown`                 | 키를 누를 때 (길게 누르면 계속 발생)                                          |
| `keypress` _(deprecated)_ | 키를 누를 때 (문자 입력 가능한 키만, 최신 브라우저에서는 `keydown` 사용 권장) |
| `keyup`                   | 키를 뗄 때                                                                    |

## 포커스 이벤트

| 이벤트 타입 | 발생 시점                                            |
| ----------- | ---------------------------------------------------- |
| `focus`     | 요소가 포커스를 받을 때 (버블링 없음)                |
| `blur`      | 요소가 포커스를 잃을 때 (버블링 없음)                |
| `focusin`   | 요소가 포커스를 받을 때 (`focus`와 달리 버블링 있음) |
| `focusout`  | 요소가 포커스를 잃을 때 (`blur`와 달리 버블링 있음)  |

## 폼 값 변경 이벤트

| 이벤트 타입 | 발생 시점                                                           |
| ----------- | ------------------------------------------------------------------- |
| `change`    | `<input>`, `<select>`, `<textarea>` 값이 변경된 후 포커스를 잃을 때 |
| `input`     | `<input>`, `<textarea>` 값이 입력될 때 (실시간 발생)                |
| `submit`    | 폼이 제출될 때 (`<form>`의 `onsubmit` 실행)                         |
| `reset`     | 폼이 초기화될 때 (`<form>`의 `onreset` 실행)                        |

## Mutation 이벤트

| 이벤트 타입        | 발생 시점                                                             |
| ------------------ | --------------------------------------------------------------------- |
| `MutationObserver` | DOM 요소가 추가/삭제되거나 속성이 변경될 때 (`observe()`로 감지 필요) |

## 뷰(View) 이벤트

| 이벤트 타입        | 발생 시점                                  |
| ------------------ | ------------------------------------------ |
| `resize`           | 브라우저 창 크기가 변경될 때               |
| `scroll`           | 페이지 또는 특정 요소의 스크롤이 발생할 때 |
| `fullscreenchange` | 문서가 전체 화면 모드로 변경될 때          |

## 리소스 이벤트

| 이벤트 타입    | 발생 시점                                                             |
| -------------- | --------------------------------------------------------------------- |
| `load`         | 리소스 (이미지, 스크립트, CSS 등)가 완전히 로드될 때                  |
| `error`        | 리소스 로딩 중 오류가 발생할 때                                       |
| `abort`        | 로딩이 중단될 때 (예: 네트워크 문제)                                  |
| `beforeunload` | 사용자가 페이지를 떠나기 직전에 발생 (경고창 가능)                    |
| `unload`       | 사용자가 페이지를 떠날 때 (새 페이지로 이동하거나 브라우저를 닫을 때) |

---

## 🔹 추가 설명

- `focus`, `blur` → **버블링 없음**, `focusin`, `focusout` → **버블링 있음**
- `input` 이벤트는 **실시간**으로 감지되지만, `change` 이벤트는 **포커스를 잃을 때** 발생
- `MutationObserver`는 기존 `mutation` 이벤트를 대체하여 DOM 변경을 감지하는 API

## 이벤트 핸들러 등록

이벤트가 발생했을 때 브라우저에 호출을 위임한 함수

### 어트리뷰트 방식

```html
<button onClick="sayHi('Lee')" />
<script>
  function sayHi(name) {
    console.log(`Hi! ${name}.`);
  }
</script>
```

### 이벤트 핸들러 프로퍼티 방식

```html
<button>Click me!</button>

<script>
  const $button = document.querySelector("button");
  $button.onClick = function () {
    console.log("button click");
  };
</script>
```

### addEventListener 메서드 방식

```js
EventTarget.addEventListener('eventType', functionName [, useCapture]);
```

```html
<button>Click me!</button>

<script>
  // 여러개의 핸들러 등록 가능
  const $button = document.querySelector("button");
  $button.addEventListener("click", function () {
    console.log("button click1");
  });
  $button.addEventListener("click", function () {
    console.log("button click2");
  });
</script>
```
