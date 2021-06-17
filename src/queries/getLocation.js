import { gql } from '@apollo/client';

export const GET_LOCATIONS_BY_ID = gql`
  query ($id: ID!) {
    location(id: $id) {
      name
      type
      dimension
      created
      residents {
        id
        name
      }
    }
  }
`;
