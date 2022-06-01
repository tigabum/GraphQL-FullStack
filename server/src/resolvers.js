const resolvers = {
  Query: {
    // get a list of tracks to populate the homepage
    trackForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // get a single track by id
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },

  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSouces }) => {
      let track = await dataSouces.trackAPI.incrementTrackViews(id);
      return {
        code: 200,
        success: true,
        message: `Successfully incremented view's number of ${id}`,
        track,
      };
    },
  },
  Track: {
    //trackForHome returns lists of tracks, then apollo server
    // iterates through the list and call author resolver for each track
    author: (parent, _, { dataSources }) => {
      //   console.log("Every list item passed as parent", parent);
      return dataSources.trackAPI.getAuthor(parent.authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
