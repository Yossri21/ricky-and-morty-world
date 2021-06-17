import { gql } from '@apollo/client';

export const GET_EPISODES = gql`
  query ($page: Int) {
    episodes(page: $page) {
      info {
        next
        count
        prev
      }
      results {
        id
        name
        episode
        air_date
      }
    }
  }
`;
