//TODO
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const mocks = {
    Query: () => ({
        trackForHome: () => [...new Array(9)]
      }),
    Track: () => ({
      id: () => 'track_01',
      title: () => 'Astro Kitty, Space Explorer',
      author: () => {
        return {
          name: 'Grumpy Cat',
          photo:
            'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
        };
      },
      thumbnail: () =>
        'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
      length: () => 1210,
      modulesCount: () => 6
    })
  };

// const server = new ApolloServer({typeDefs:typeDefs})
const server = new ApolloServer({ typeDefs,mocks }); //instantiating Apollo Server to serve GraphQL queries from client

server.listen().then(console.log(`Apollo Server is running`));
