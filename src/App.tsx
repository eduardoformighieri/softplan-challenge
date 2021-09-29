import { Router } from './routes/app.routes';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './styles/theme';
import './styles/scrollbarStyles.css';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}
