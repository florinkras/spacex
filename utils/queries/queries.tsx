import { gql } from "@apollo/client";

export const launchesPast = gql`
  query Launches($offset: Int, $limit: Int) {
    launchesPast(offset: $offset, limit: $limit) {
      mission_name
      launch_date_local
      links {
        flickr_images
      }
      details
    }
  }
`;
