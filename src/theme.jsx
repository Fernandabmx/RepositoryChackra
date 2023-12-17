// theme.js

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      100: '#ff69b4',
      // Agrega colores específicos para el modo oscuro aquí
      900: '#1a202c', // Fondo oscuro
      800: '#2d3748', // Otro color oscuro si es necesario
    },
  },
});

export default theme;
