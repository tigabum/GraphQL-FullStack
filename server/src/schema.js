const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get tracks array for homepage"
    trackForHome: [Track!]!
    "Get specific track with id"
    track(id: ID!): Track!
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
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Moudles"
    modules: [Module!]!
  }

  "Author of complete track"
  type Author {
    id: ID!
    "Authors's full name"
    name: String!
    "Authors profile picture url"
    photo: String
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
      id: ID!
      "The Module's title"
      title: String!
      "The Module's length in minutes"
      length: Int
  }
`;

module.exports = typeDefs;
