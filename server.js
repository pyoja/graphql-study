import { ApolloServer, gql } from "apollo-server";

// query - GET
// Mutationn - POST DELETE PUT
// !가 없다면 null이 들어가도 됨 -> !가 붙었다면 꼭 값이 있어야함 (!=required)

const typeDefs = gql`
  type User {
    id: ID
    username: String
  }
  type Tweet {
    id: ID!
    text: String!
    author: User!
  }
  type Query {
    allTweets: [Tweet!]!
    tweet(id: ID): Tweet
  }
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
`;
const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Runnig on ${url}`);
});
