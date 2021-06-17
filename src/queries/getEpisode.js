import { gql } from '@apollo/client';

export const GET_EPISODES_BY_ID = gql`
  query ($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      created
      episode
      characters {
        id
        name
      }
    }
  }
`;
