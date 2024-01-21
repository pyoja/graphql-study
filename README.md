# 왜 GraphQL을 사용할까?

### REST API처럼 수많은 API를 만들지 않아도 됨
![수많은API](https://github.com/pyoja/graphql-study/assets/113084653/9c75d8ae-83de-41b0-b077-e8e2db3f51b3)

### 간단하게 API를 한 곳으로 묶을 수 있음
![간략한 API](https://github.com/pyoja/graphql-study/assets/113084653/72a6ba74-7739-4a9b-a050-724a536be75a)

---

### REST API의 오버패칭 같은 경우, 내가 원하지 않는 정보까지 가져옴
![오버패칭단점](https://github.com/pyoja/graphql-study/assets/113084653/673f4603-23d7-47b1-ba99-773298663a40)

### GraphQL은 필요한 정보만 요청해서 가져옴
![그래프오버패칭장점](https://github.com/pyoja/graphql-study/assets/113084653/37c774a0-eeca-4c70-9d58-415e4343e89a)

---

### REST API의 언더패칭 같은 경우, 내가 필요한 정보를 덜 가져옴
![언더패칭](https://github.com/pyoja/graphql-study/assets/113084653/6f56a227-61e3-4a42-b6ba-bc21d4054150)

### GraphQL은 원하는 정보를 쉽게 가져옴
![언더패칭2](https://github.com/pyoja/graphql-study/assets/113084653/80a2d6b2-2c09-4e97-b539-61ef8e76308a)

# 설치 할 것
```
  "dependencies": {
    "apollo-server": "^3.13.0",
    "graphql": "^16.8.1"
  },
```

# 기본 코드 (server.js)
```
import { ApolloServer, gql } from "apollo-server";

// query - GET
// Mutationn - POST DELETE PUT

const typeDefs = gql`
  type User {
    id: ID
    username: String
  }
  type Tweet {
    id: ID
    text: String
    author: User
  }
  type Query {
    allTweets: [Tweet]
    tweet(id: ID): Tweet
  }
  type Mutation {
    postTweet(text: String, userId: ID): Tweet
  }
`;
const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Runnig on ${url}`);
});


```


# 예시 코드

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
