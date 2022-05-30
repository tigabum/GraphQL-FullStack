//TODO
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const TrackAPI = require("./datasources/track-api");


// const server = new ApolloServer({typeDefs:typeDefs})
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
}); //instantiating Apollo Server to serve GraphQL queries from client

server.listen().then(console.log(`Apollo Server is running`));
