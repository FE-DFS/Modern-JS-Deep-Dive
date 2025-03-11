## 1. DOM의 구조와 객체 모델

### 1.1 DOM(Document Object Model)이란?

- HTML, XML 문서를 브라우저가 해석하여 **트리(Tree) 구조**로 변환한 객체 모델이다.
- 문서의 각 요소는 \*\*노드(Node)\*\*로 표현되며, 부모-자식 관계를 가진다.
- DOM을 통해 요소를 선택, 수정, 삭제, 생성할 수 있으며, JavaScript로 동적 조작이 가능하다.

### 1.2 DOM의 기본 트리 구조

```plaintext
Document
 ├── <html>
 │    ├── <head>
 │    │    ├── <title>
 │    │    └── <meta>
 │    ├── <body>
 │         ├── <div>
 │         │    ├── <p>
 │         │    └── <span>
 │         └── <script>
```

- `Document` 객체는 **문서의 최상위 루트**로, 모든 요소의 부모이다.
- `Element` 노드는 \*\*HTML 요소(태그)\*\*를 의미하며, **속성(Attribute), 텍스트(Text), 주석(Comment)** 노드도 존재한다.

### 1.3 DOM 객체의 주요 프로퍼티

```js
console.log(document.documentElement); // <html>
console.log(document.head); // <head>
console.log(document.body); // <body>
```

- `document.documentElement`: `<html>` 요소
- `document.head`: `<head>` 요소
- `document.body`: `<body>` 요소
- `document.title`: 문서 제목
- `document.URL`: 현재 문서의 URL

---

## 2. DOM 요소 선택(취득) 방법

### 2.1 HTMLCollection과 NodeList의 차이점 및 문제점

#### HTMLCollection

- `getElementsByTagName()` 또는 `getElementsByClassName()`을 사용하면 \*\*HTMLCollection(유사 배열)\*\*을 반환한다.
- **실시간 업데이트됨**: DOM이 변경될 때 자동으로 반영되므로, 반복문에서 예상치 못한 결과를 초래할 수 있다.
- **배열 메서드 사용 불가**: `forEach()`, `map()`, `filter()` 등의 배열 메서드를 직접 사용할 수 없다.

**해결법:**

```js
const elements = document.getElementsByClassName("myClass");
const elementsArray = Array.from(elements); // 배열로 변환
elementsArray.forEach((el) => console.log(el));
```

또는

```js
const elementsArray = [...document.getElementsByClassName("myClass")];
elementsArray.forEach((el) => console.log(el));
```

#### NodeList

- `querySelectorAll()`을 사용하면 \*\*NodeList(유사 배열)\*\*을 반환한다.
- **정적 리스트**: NodeList는 DOM이 변경되어도 자동으로 업데이트되지 않는다.
- `forEach()` 사용 가능하지만, `map()`이나 `filter()` 등 배열 메서드는 지원하지 않는다.

**해결법:**

```js
const nodeList = document.querySelectorAll(".myClass");
const nodeArray = Array.from(nodeList); // 배열로 변환
nodeArray.map((el) => console.log(el));
```

또는

```js
const nodeArray = [...document.querySelectorAll(".myClass")];
nodeArray.map((el) => console.log(el));
```

이러한 변환을 통해 HTMLCollection과 NodeList의 문제점을 해결하고 배열 메서드를 사용할 수 있다.

### 2.2 요소 선택 메서드

| 메서드                                   | 반환값         | 특징            |
| ---------------------------------------- | -------------- | --------------- |
| `document.getElementById(id)`            | 단일 요소      | 가장 빠름       |
| `document.getElementsByTagName(tag)`     | HTMLCollection | 실시간 반영됨   |
| `document.getElementsByClassName(class)` | HTMLCollection | 실시간 반영됨   |
| `document.querySelector(selector)`       | 단일 요소      | CSS 선택자 지원 |
| `document.querySelectorAll(selector)`    | NodeList       | 정적 리스트     |

---

## 3. DOM 요소 조작

### 3.1 요소 내용 변경

```js
// 텍스트 변경
element.textContent = "새로운 내용";

// HTML 포함하여 변경
element.innerHTML = "<strong>굵은 텍스트</strong>";
```

- `textContent`: **HTML 태그 무시**하고 순수한 텍스트만 설정/읽기 가능. 보안적으로 안전함.
- `innerHTML`: HTML 코드 포함 가능하나, **기존 하위 요소를 모두 제거하고 새로운 내용을 삽입**하므로 **불필요한 렌더링 비용이 발생**할 수 있음.
- **부분적인 내용 변경**이 필요한 경우, `createElement()`와 `replaceChild()`를 사용하는 것이 더 효율적이다.

```js
const newElement = document.createElement("span");
newElement.textContent = "새로운 텍스트";
element.replaceChild(newElement, element.firstChild);
```

### 3.2 속성(Attributes) 조작

```js
// 속성 값 가져오기
const value = element.getAttribute("href");

// 속성 값 설정
element.setAttribute("href", "https://example.com");

// 속성 제거
element.removeAttribute("href");
```

- `getAttribute()`, `setAttribute()`, `removeAttribute()`를 사용하여 속성 값을 조작 가능.
- `element.id`, `element.value`, `element.src` 등은 직접 접근 가능 (`element.src = '...'`).

### 3.3 스타일(Style) 조작

```js
// 개별 스타일 설정
element.style.color = "red";

// 클래스 추가/삭제
element.classList.add("active");
element.classList.remove("hidden");

element.classList.toggle("dark-mode"); // 추가/제거 토글
```

- `style.propertyName` 방식은 인라인 스타일을 변경하는 것이므로, 가급적 클래스(`classList`)를 사용하여 스타일을 변경하는 것이 유지보수에 유리함.

### 3.4 DOM 트리 구조 변경

```js
// 새로운 요소 생성
const newDiv = document.createElement("div");
newDiv.textContent = "새로운 요소";

// 부모 요소에 추가
document.body.appendChild(newDiv);

// 특정 위치에 삽입
const reference = document.getElementById("reference");
document.body.insertBefore(newDiv, reference);

// 요소 삭제
reference.remove();
```

- `createElement()`: 새로운 요소를 생성
- `appendChild()`: 특정 요소의 자식으로 추가
- `insertBefore()`: 특정 요소 앞에 삽입
- `remove()`: 해당 요소를 DOM에서 제거

추가적으로, **DocumentFragment를 활용하면 다량의 DOM 변경 시 성능을 개선할 수 있다.**

```js
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const item = document.createElement("li");
  item.textContent = `아이템 ${i}`;
  fragment.appendChild(item);
}
document.querySelector("ul").appendChild(fragment);
```

---
