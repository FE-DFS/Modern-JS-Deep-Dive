# REST API

REST:  
HTTP의 장점을 최대한 활용할 수 있는 아키텍처

RESTful:  
REST의 기본 원칙을 성실히 지킨 서비스

REST API
클라이언트가 HTTP를 기반으로 서버의 리소스에 접근하는 아키텍처인 REST 원칙을 잘 지킨 API를 의미한다.

## REST API 구성

| 구성 요소              | 내용                           | 표현 방법        |
| ---------------------- | ------------------------------ | ---------------- |
| 자원 (resource)        | 자원                           | URI(엔드포인트)  |
| 행위 (verb)            | 자원에 대한 행위               | HTTP 요청 메서드 |
| 표현 (representations) | 자원에 대한 행위의 구체적 내용 | 페이로드         |

## REST API 설계 원칙

1. URI은 리소스를 표현한다.  
   동사 대신 명사를 사용한다.

2. 리소스에 대한 해우이는 HTTP 요청 메소드로 표현한다.  
   GET. POST, PUT. PATCH. DELETE 등

```
 # bad
 GET /todos/delete/1
 GET /getTodos/1
 GET /todos/show/1
 # good
 DELETE /todos/1
 GET /todos/1
```
