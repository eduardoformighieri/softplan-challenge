import { Router } from './routes/app.routes';
import { ChakraProvider } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';

import { theme } from './styles/theme';
import './styles/scrollbarStyles.css';

import { GET_CHARACTERS_BY_IDS } from './apollo/queries';

import { Character } from './utils/types';

export function App() {
  const allStoragedCharacters: Array<Character> = JSON.parse(
    localStorage.getItem('allCharacters') || '[]'
  );

  const doQuery = allStoragedCharacters.length === 0;

  let i = 0;
  let array = [];

  while (i <= 660) {
    array.push(i);
    i++;
  }

  const { error, loading, data } = useQuery(GET_CHARACTERS_BY_IDS, {
    skip: !doQuery,
    variables: {
      characterIds: array,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  if (doQuery) {
    localStorage.setItem('allCharacters', JSON.stringify(data.charactersByIds));
  }

  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}
