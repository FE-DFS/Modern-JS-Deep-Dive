```js
// 블록문
{
  var foo = 10;
}
// 제어문
var x = 1;
if (x < 10) {
  x++;
}
// 함수 선언문
function sum(a, b) {
  return a + b;
}

// 조건문 if문의 조건식은 불리언으로 평가되어야 한다. 그렇지 않을 경우 강제 타입변환환
if (조건식) {
  // 조건식이 참이면 해당 코드 블록이 실행
} else {
  // 조건식이 거짓이면 해당 코드 블록이 실행
}

if (조건식1) {
  // 1
} else if (조건식2) {
  // 2
} else {
  // 3
}

// switch 문
// break를 걸지 않을 경우 일치한 case기준으로 아래 모든 case가 실행됨 이를 폴 스루라 한다
switch (표현식) {
    case 표현식1:
        switch 문의 표현식과 표현식 1이 일치하면 실행될 문;
        break;
    case 표현식2:
        //
        break;
    default:
        조건에 일치하는 case 문이 없을 경우 실행될 문;
}

// 반복문
for (변수 선언문 또는 할당문; 조건식; 증감식) {
    조건식이 참인 경우 반복 실행될 문;
}

for (var i=0; i < 2; i++) {
    console.log(i);
}

//while 조건식이 true일 경우 무한루프
var count = 0;
while (count < 3) {
  console.log(count);
  count++;
}
// do while
do {
  console.log(count);
  count++;
} while (count < 3);
// break 반복문을 빠져 나와야 할 경우우
for() {
  if () break;
}
// continue
for() {
  if () continue; // 현재 지점을 기준으로 코드 흐름을 중단하고 반복 증감식으로 이동시킨다.
}
```
