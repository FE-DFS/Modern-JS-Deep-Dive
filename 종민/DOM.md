# DOM

HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조
-> HTML을 브라우저가 이해할 수 있게 만든 트리 자료구조이고 이를 제어할 수 있는 프로퍼티와 메서드도 제공한다.

## 노드

html 요소 -> 노드

```html
<div class="greeting">Hello</div>
```

요소 노드: div --- 어트리뷰트 노드: class="greeting
|
|  
텍스트 노드:"Hello"

## 트리

노드들의 계층 구조

노드 객체들로 구성된 트리 자료구조를 DOM이라고 한다.

DOM 트리라고 하기도 한다.

## 노드 객채의 타입

### 문서 노드

DOM 트리의 최상위에 존재하는 루트 노드로서 document 객체를 가리킨다.
document 객체는 브라우저가 렌더링한 HTML 문서 전체를 가리키는 객체
전역 객체 window의 document 프로퍼티에 바인딩되어 있다. 따라서 문서 노드는 window.document 또는 document로 참조할 수 있다.

HTML 문서당 document 객체는 유일하다.

### 요소 노드

html 요소를 가리키는 객체
중첩에 의한 부자 관계를 가진다.

### 어트리뷰트 노드

html 요소의 어트리뷰트를 가리키는 객체
요소 노드에만 연결되어 있다.

### 텍스트 노드

html 요소의 텍스트 가리키는 객체
요소 노드의 자식 요소
리프 노드

> 중요한 것은 DOM API, 즉 DOM이 제공하는 프로퍼티와 메서드를 사용하여 노드에 접근하고 HTML의 구조나 내용 또는 스타일 등을 동적으로 변경하는 방법을 익히는 것이다. 프런트엔드 개발자에게 HTML은 단순히 태그와 어트리뷰트를 선언적으로 배치하여 뷰를 구성하는 것 이상의 의미를 갖는다. 즉, HTML을 DOM과 연관 지어 바라보아야 한다.

## 요소 노트 취득

요소 노드 취득은 HTML 요소를 조작하는 시작점이다.

### id로 취득

```js
document.getElementById("id");
```

### 태그 이름으로 취득

```js
// 문서 전체에서 탐색
document.getElementsByTagName("div");
// 노드의 자손 노드 중에서 탐색
Element.getElementsByTagName("div");
```

### 클래스 이름으로 취득

```js
// 문서 전체에서 탐색
document.getElementsByClassName("fruit");
// 노드의 자손 노드 중에서 탐색
Element.getElementsByClassName("fruit");
```

### CSS 선택자를 이용한 요소 노드 취득

```js
// 하나만
document.querySelector(".banana");
// 리스트 반환
document.querySelectorAll("ul > li");
```

### 특정 요소 노드를 취득할 수 있는지 확인

Element.prototype.matches 메서드, 인수로 전달한 CSS 선택자를 통해 특정 요소 노드를 취득할 수 있는지 확인한다

```js
 const $apple = document.querySelector( .apple );
 $apple.matches('#fruits > li.apple'); // true or false
```

이벤트 위임을 사용할 때 유용하다

### HTMLCollection, NodeList

노드 객체의 상태 변경과 상관없이 안전하게 DOM 컬렉션을 사용하려면 HTMLCollection이나
NodeList 객체를 배열로 변환하여 사용하는 것을 권장

#### HTMLCollection

getElementsByTagName. getElementsByClassName -> HTMLCollection

노드 객체의 상태 변화를 실시간으로 반영하는 살아 있는 live 객
체.

```js
// class 값이 ’red’인 요소 노드를 모두 탐색하여 HTMLCollection 객체에 담아 반환한다.
const $elems = document.getElementsByClassName("red");
// 이 시점에 HTMLCollection 객체에는 3개의 요소 노드가 담겨 있다.
console.log($elems); // HTMLCollection(3) [li.red, li.red, li.red]
// HTMLCollection 객처/의 모든 요소의 class 값을 ‘blue’로 변경한다.
for (let i = 0; i < $elems.length; i++) {
  $elems[i].className = "blue";
}
// HTMLCollection 객체의 요소가 3개에서 1 개로 변경되었다.
console.log($elems); // HTMLCollection(l) [li.red]
```

배열로 바꾸어 실시간 기능을 끄는 방법이 간단하다

### NodeList

querySelectorAll -> NodeList
non-live 객체
childNodes 프로퍼티는 NodeList 객체(live)를 반환

## 노드 탐색

읽기 전용

### 공백 텍스트 노드

공백 노드 생김

### 자식 노드 탐색

Node.prototype.childNodes
->NodeList에 담아 반환, 텍스트 노트도 포함될 수 있다.

Node.prototype.firstChild
Node.prototype.lastchild

->텍스트 노트도 포함될 수 있다.

Element.prototype.children
Element.prototype.firstElementChild
Element.prototype.lastElementChild

-> 요소 노드만 반환

### 자식 노드 존재 확인

Node.prototype.hasChildNodes

```js
// hasChildNodes 메서드는 텍스트 노드를 포함하여 자식 노드의 존재를 확인한다.
console.log($fruits•hasChildNodes()); // true
 // 자식 노드 중에 텍스트 노드가 아닌 요소 노드가 존재하는지는 확인한다.
console.log(!!$fruits.children.length); // 0 — false
 // 자식 노드 중에 텍스트 노드가 아닌 요소 노드가 존재하는지는 확인한다.
console.log(!!$fruits.childElementCount); // 0 — false
```

### textContent

텍스트 노드 접근,제어

innerText 프로퍼티는 CSS에 순종적이다.

innerText 프로퍼티는 CSS를 고려해야 하므로 textcontent 프로퍼티보다 느리다

## DOM 조작

리플로우와 리페인트 발생하므로 주의헤서 사용

### innerHTML

innerHTML 프로퍼티를 사용한 DOM 조작은 구현이 간단하고 직관적이라는 장점이 있지만 크로스 사
이트 스크립팅 공격에 취약한 단점

```js
$fruits.innerHTML += '<li class="banana">Banana</li>';
```

- 추가할 경우 삭제후 재할당이라 비효율
- 순서를 설정할 수 없음

### insertAdjacentHTML

```html
<!DOCTYPE html>
<html>
  <body>
    <!-- beforebegin -->
    <div id="foo">
      <!-- afterbegin -->
      text
      <!-- beforeend -->
    </div>
    <!-- afterend -->
  </body>
  <script>
    const $foo = document.getElementById("foo");
    $foo.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");
    $foo.insertAdjacentHTML("afterbegin", "<p>afterbegin</p>");
    $foo.insertAdjacentHTML("beforeend", "<p>beforeend</p>");
    $foo.insertAdjacentHTML("afterend", "<p>afterend</p>");
  </script>
</html>
```

추가되는 요소만 추가해서 효율적이다.

### 노드 생성

```js
document.createElement("li");
document.createTextNode("Banana");
```

```js
// 텍스트 노드를 생성하여 요소 노드의 자식 노드루 추가
$li.appendChild(document.createTextNode("Banana"));
// $li 요소 노드어/ 자식 노드가 하나도 없는 위 크두와 동일하게 동작한다.
$li.textContent = "Banana";

$fruits.appendChild($li);
```

### Document.prototype.createDocumentFragment

```html
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits"></ul>
  </body>
  <script>
    const $fruits = document.getElementById("fruits");

    // DocumentFragment 누드 생성
    const $fragment = document.createDocumentFragment();
    ["Apple", "Banana", "Orange"].forEach((text) => {
      // 1. 요소 노드 생성
      const $li = document.createElement("li");
      // 2. 텍스트 노드 생성
      const textNode = document.createTextNode(text);
      // 3. 텍스트 노드를 $li 요소 노드의 자식 노드로 추가
      $li.appendChild(textNode);
      // 4. $li 요소 노드를 Document Fragment 노드의 마지막 자식 노드로 추가
      $fragment.appendChild($li);
    });
    // 5. DocumentFragment 노드를 fruits 요소의 마지막 자식 노드로 추가
    $fruits.appendChild($fragment);
  </script>
</html>
```

DOM 변경이 발생하는 것은 한 번뿐이며 리플로우와 리페인트도 한 번만 실행된다. 따라서 여러 개의 요소 노드를 DOM에 추가하는 경우 DocumentFragment 노드를 사용하는 것이 더 효율적이

### 노드 삽입

Node.prototype.appendChild 메서드는 인수로 전달받은 노드를 자신을 호출한 노드의 마지막 자식 노드로 DOM에 추가

Node.prototype.insertBefore(newNode, childNode) 메서드는 첫 번째 인수로 전달받은 노드를 두 번째 인수로 전달받은 노드 앞에 삽입

```js
// 두 번째 인수로 전달받은 노드는 반드시 #fruits 요소 노드의 자식 노드이어야 한다.
$fruits.insertBefore($li, document.querySelector("div")); // DOMException
```

### 노드 이동

DOM에 이미 존재하는 노드를 appendChild 또는 insertBefore 메서드를 사용하여 DOM에 다시 추가하면 현재 위치에서 노드를 제거하고 새로운 위치에 노드를 추가한다. 즉, 노드가 이동한다.

### 노드 복사

```js
const $fruits = document.getElementById("fruits");
const $apple = $fruits.firstElementchild;
// $apple 요소를 얕은 복사하여 사본을 생성. 텍스트 노드가 없는 사본이 생성된다.
const $shallowClone = $apple.cloneNode();
// 사본 요소 노드에 텍스트 추가
$shallowClone.textContent = "Banana";
// 사본 요소 노드를 #fruits 요소 노드의 마지막 노드로 추가
$fruits.appendChild($shallowClone);
// #fruits 요소를 깊은 복사하여 모든 자손 노드가 포함된 사본을 생성
const $deepClone = $fruits.cloneNode(true);
// 사본 요소 노드를 fruits 요소 노드의 마지막 노드로 추가
$fruits.appendChild($deepClone);
```

### 노드 교체

Node.prototype. replaceChild(newChild, oldChild)
자신을 호줄한 노드의 자식 노드를 다른 노드로 교체

oldChild는 DOM에서 제거된다.

### 노드 삭제

Node.prototype.removeChild(child) 메서드는 child 매개변수에 인수로 전달한 노드를 DOM에서 삭제한다.

인수로 전달한 노드는 removeChild 메서드를 호출한 노드의 자식 노드이어야 한다.

## 어트리뷰트

### Element.prototype.attributes

getter만 존재한다.

요소 노드의 모든 어트리뷰트 노드의 참조가 담긴 NamedNodeMap 객체를 반환

```html
<body>
  <input id="user" type="text" value="ungmo2" />
  <script>
    // 요소 노드의 attribute 프로퍼티는 요소 노드의 모든 어트리뷰트 노드의 참조가 담긴
    // NamedNodeMap 객체를 반환한다.
    const { attributes } = document.getElementById("user");
    console.log(attributes);
    // NamedNodeMap {0： id, 1： type, 2： value, id: id, type: type, value: value, length: 3}
    // 어트리뷰트 값 취득
    console.log(attributes.id.value); // user
    console.log(attributes.type.value); // text
    console.log(attributes.value.value); // ungmo2
  </script>
</body>
```

### HTML 어트리뷰트 조작

Element.prototype.getAttribute/setAttribute

```html
<body>
  <input id="user" type="text" value="ungmo2" />
  <script>
    const $input = document.getElementById("user");
    const inputValue = $input.getAttribute("value");
    console.log(inputValue);
    $input.setAttribute("value", "foo");
    console.log($input.getAttribute("value"));
    //foo
  </script>
</body>
```

Element.prototype.hasAttribute(attributeName)
Element.prototype.removeAttribute

```html
<body>
  <input id="user" type="text" value="ungmo2" />
  <script>
    const $input = document.getElementById("user");
    // value 어트리뷰트의 존재 확인
    if ($input.hasAttribute("value")) {
      $input.removeAttribute("value");
    }
  </script>
</body>
```

### HTML 어트리뷰트 vs. DOM 프로퍼티

요소 노드의 초기 상태는 어트리뷰트 노드가 관리(사용자의 입력에 의해 변하지 않음, 문자열 반환)

요소 노드의 최신 상태는 DOM 프로퍼티가 관리.

### data, dataset 어트리뷰트

data는 사용자 정의 어트리뷰트 dataset으로 획득한다.

```html
<!DOCTYPE html>
<html>
  <body>
    <ul class="users">
      <li id="1" data—user-id="7621" data-role="admin">Lee</li>
      <li id="2" data-user—id="9524" data-role="”subscriber">Kim</li>
    </ul>
    <script>
       const users = [ document.querySelector('.users').children]；
      // user-id가 ’7621’인 요소 노드를 취득한다.
       const user users.find(user => user.dataset.userid ==='7621');
      // user-id가 *7621‘인 요소 노드에서 data-role의 값을 취득한다.
       console.log(user.dataset.role); // "admin"
       // user-id가 ’7621‘인 요소 누드의 data-role 값을 변경한다.
       user.dataset.role = 'subscriber';
      console.log(user.dataset);
      // DOMStringMap {userId: "7621", role: "subscriber"}

      user.dataset.good = "false"
      console.log(user.dataset);
      //<li id="1" data—user-id="7621" data-role="admin data-good="false">Lee</li>
      // DOMStringMap {userId: "7621", role: "subscriber", good:"false"}
    </script>
  </body>
</html>
```

존재하지 않는 이름을 키로 사용하여 dataset 프로퍼티에 값을 할당하면 HTML 요소에 data 어트리뷰트가 추가된다. 이때 dataset 프로퍼티에 추가한 카멜케이스(fooBar)의 프로퍼티 키는 data 어트리뷰트의 data- 접두사 다음에 케밥케이스(data-foo-bar)로 자동 변경되어 추가된다.

## 스타일

### 인라인스타일 조작

HTMLElement.prototype.style

```js
//카메레이스로 변환됨
$div.style.backgroundColor = "yellow";

//케밥으로 하려면 이렇게 사용
$div.stylet["background-color"] = "yellow";

// 단위 뺴먹지 않기
$div.style.width = "100px";
```

### 클래스 조작

className,classList

```html
<div class="box red">Hello</div>
<script>
  const $box = document.queryselector(".box");
  // .box 요소의 class 어트리뷰트 값을 취득
  console.log($box.className);
  // 'box red'

  // .box 요소의 class 어트리뷰트정보를담은 DOMTokenList 객체를취득
  // classList가반환하는 DOMTokenList 객체는 HTMLCollection과 NodeList와같이
  // 노드 객체의 상태 변화를 실시간으로 반영하는 살아 있는(live) 객체다.
  // .box 요소의 class 어트리뷰트 값 중에서 'red’만 ’blue’로 변경
  $box.className = $box.className.replace("red", "blue");

  console.log($box.classList);
  // DOMTokenList(2) [length: 2, value: "box blue", 0: "box", 1： "blue"]

  $box.className.replace("blue", "red");

  $box.classList.add("bar", "baz ");
  $box.classList.remove("bar", "baz");
  $box.classList.item(0); // — "box"
  $box.classList.contains("box"); // — true
  $box.classList.toggle("foo"); // — class="box blue foo"
  $box.classList.toggle("foo"); // — class=“box blue"
</script>
```

### getComputedStyle

적용됭 모든 스타일

```js
window.getComputedStyle($box);
```
