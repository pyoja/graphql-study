import { ApolloServer, gql } from "apollo-server";

// GET /allFilms

const typeDefs = gql `
  type Query{
    allFilms: String
  }
`;
const server = new ApolloServer({typeDefs});

server.listen().then(({ url }) => {
  console.log(`Runnig on ${url}`);
});
