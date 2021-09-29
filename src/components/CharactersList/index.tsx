import { Flex } from '@chakra-ui/react';

import { Character } from '../../utils/types';

interface CharactersListProps {
  page: number;
}

function paginate(array: Array<{}>, page_size: number, page_number: number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export function CharactersList({ page }: CharactersListProps) {
  const allStoragedCharacters: Array<Character> = JSON.parse(
    localStorage.getItem('allCharacters') || '[]'
  );

  const paginated: any = paginate(allStoragedCharacters, 20, page);

  return <Flex flexWrap="wrap"></Flex>;
}
