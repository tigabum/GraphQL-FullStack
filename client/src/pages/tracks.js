import React from "react";
import { Layout, QueryResult } from "../components";
import { gql, useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

export const ALL_TRACKS = gql`
  query getTracks {
    trackForHome {
      id
      title
      author {
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;
const Tracks = () => {
  const { loading, error, data } = useQuery(ALL_TRACKS);
  return (
    <Layout grid>
      <QueryResult loading={loading} error={error} data={data}>
        {data?.trackForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
