import { Flex } from '@chakra-ui/react';
import { CharacterCard } from '../CharacterCard';

import { Character } from '../../utils/types';

interface CharactersListProps {
  page: number;
}

function paginate(
  charactersArray: Array<Character>,
  pageSize: number,
  currentPage: number
) {
  return charactersArray.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
}

export function CharactersList({ page }: CharactersListProps) {
  const allStoragedCharacters: Array<Character> = JSON.parse(
    localStorage.getItem('allCharacters') || '[]'
  );

  const paginated: Array<Character> = paginate(allStoragedCharacters, 20, page);

  return (
    <Flex flexWrap="wrap">
      {paginated.map((character: Character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Flex>
  );
}
