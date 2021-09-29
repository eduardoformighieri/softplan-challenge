import { Box } from '@chakra-ui/react';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';

export function Loading({ ...rest }) {
  return (
    <Box {...rest}>
      <UseAnimations animation={loading} strokeColor="white" size={60} />
    </Box>
  );
}
