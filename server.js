import { ApolloServer, gql } from "apollo-server";
// 테스트

const server = new ApolloServer({});

server.listen().then(({ url }) => {
  console.log(`Runnig on ${url}`);
});
