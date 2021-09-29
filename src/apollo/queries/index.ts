import { gql } from '@apollo/client';

export const GET_CHARACTERS_BY_IDS = gql`
  query getCharactersByIds($characterIds: [ID!]!) {
    charactersByIds(ids: $characterIds) {
      id
      name
      status
      species
      origin {
        name
      }
      location {
        name
      }
      image
    }
  }
`;
