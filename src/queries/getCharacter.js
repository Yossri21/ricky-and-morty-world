import { gql } from '@apollo/client';

export const GET_CHARACTERS_BY_ID = gql`
  query ($id: ID!) {
    character(id: $id) {
      name
      species
      origin {
        name
      }
      location {
        name
      }
      image
      created
      gender
      status
      episode {
        id
        episode
        name
        air_date
      }
    }
  }
`;
