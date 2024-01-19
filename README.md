### 왜 GraphQL을 사용할까?
- REST API의 단점인 Overfetcing과 Underfeting을 해결하기 위해서

- REST API의 오버패칭 같은 경우, 내가 원하지 않는 정보까지 가져옴
![오버패칭단점](https://github.com/pyoja/graphql-study/assets/113084653/673f4603-23d7-47b1-ba99-773298663a40)

-  GraphQL은 필요한 정보만 요청해서 가져옴
![그래프오버패칭장점](https://github.com/pyoja/graphql-study/assets/113084653/37c774a0-eeca-4c70-9d58-415e4343e89a)




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
