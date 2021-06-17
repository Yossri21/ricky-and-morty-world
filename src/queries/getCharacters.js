import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query ($page: Int) {
    characters(page: $page) {
      info {
        next
        count
        prev
      }
      results {
        id
        name
        species
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`;
