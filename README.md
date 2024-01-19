### 왜 GraphQL을 사용할까?
- REST API의 단점인 Overfetcing과 Underfeting을 해결하기 위해
-





### 예시 코드

- 요청코드
```
query HeroNameAndFriendsQuery {
  hero {
    id
    name
    friends {
      id
      name
    }
  }
}
```

- 응답코드
```
{
  "hero": {
    "id": "2001",
    "name": "R2-D2",
    "friends": [
      {
        "id": "1000",
        "name": "Luke Skywalker"
      },
      {
        "id": "1002",
        "name": "Han Solo"
      },
      {
        "id": "1003",
        "name": "Leia Organa"
      }
    ]
  }
}
```
