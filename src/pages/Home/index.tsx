import { Box, Text } from '@chakra-ui/react';

export function Home() {
  return (
    <Box
      mt={{ base: '10', lg: '20' }}
      mx={{ base: '4', lg: '8', xl: '24', '2xl': '32' }}>
      <Text fontFamily="RobotoBold" fontSize="4xl">
        Lista de personagens
      </Text>
    </Box>
  );
}
