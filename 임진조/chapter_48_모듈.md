# 모듈

애플리케이션을 구성하는 개별적 요소로 재사용 가능한 코드조각
피일 스코프를 갖는 모듈의 모든 자산은 캡슐화된다.
공개가 필요한 자산만 export 한다.
다른 모듈자산을 사용하는 모듈을 모듈 사용자라고 부른다.

## 자바스크립트는 불완전한 모듈

스크립트 태그로 분리된 상태를 가지지만 파일마다 독립적이지는 않다.
따라서 모든 분린된 자바스크립트 파일들은 하나의 전역을 가짐.

## ES6(ESM)

이것을 해결하기 위해 모듈문법을 만듬
스크립트 태그에 type='module'을 사용함으로써 모듈화 가능

하나의 값만 export 한다면 default 키워드를 사용한다.
