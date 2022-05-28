const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get tracks array for homepage"
    trackForHome: [Track!]!
  }

  "Track is a group of module that teaches about specific topic"
  type Track {
    id: ID!
    "Track's id"
    title: String!
    "Track's main author"
    author: Author!
    "Track's main illustration shown in homepage"
    thumbnail: String
    "Track's approximate length to complete, in minutes"
    length: Int!
    "The number of modules this track contains"
    modulesCount: Int!
  }

  "Author of complete track"
  type Author {
    id: ID!
    "Authors's full name"
    name: String!
    "Authors profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
