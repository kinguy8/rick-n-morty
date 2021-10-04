import { gql } from '@apollo/client';

export const GET_CHARACTER_LIST = gql`
  query getCharacterName($name: String!) {
    characters(filter: { name: $name }) {
      results {
        name
        image
      }
    }
  }
`;
