import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import App from './App';
import theme from './theme/theme';

//Estilos Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap

const root = createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme} resetCss={false}>
    <App />
  </ChakraProvider>
);
