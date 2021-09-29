import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { Character } from '../../utils/types';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  const history = useHistory();
  function handleClick(characterId: string) {
    history.push(`/character/${characterId}`);
  }

  return (
    <Flex
      borderRadius="4"
      as="button"
      flexDirection="column"
      textAlign="left"
      onClick={() => handleClick(character.id)}
      w={320}
      bg="gray.700"
      mt="4"
      mx="auto">
      <Image
        borderTopRightRadius="4"
        borderLeftRightRadius="4"
        w={320}
        src={character.image}
        alt={character.name}
      />

      <Box p="4">
        <Text pt="4" color="gray.100" fontFamily="RobotoBlack" fontSize="4xl">
          {character.name}
        </Text>
        <Flex pt="3" fontSize="lg" flexWrap="wrap">
          <Text pr="2" fontFamily="RobotoMedium" color="gray.500">
            Status:
          </Text>
          <Text fontFamily="Roboto" color="gray.300">
            {character.status}
          </Text>
        </Flex>
        <Flex pt="2" fontSize="lg" flexWrap="wrap">
          <Text pr="2" fontFamily="RobotoMedium" color="gray.500">
            Espécie:
          </Text>
          <Text fontFamily="Roboto" color="gray.300">
            {character.species}
          </Text>
        </Flex>
        <Flex pt="2" fontSize="lg" flexWrap="wrap">
          <Text pr="2" fontFamily="RobotoMedium" color="gray.500">
            Origem:
          </Text>
          <Text fontFamily="Roboto" color="gray.300">
            {character.origin.name}
          </Text>
        </Flex>
        <Flex pt="2" pb="4" fontSize="lg" flexWrap="wrap">
          <Text pr="2" fontFamily="RobotoMedium" color="gray.500">
            Última vez visto em:
          </Text>
          <Text fontFamily="Roboto" color="gray.300">
            {character.location.name}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
