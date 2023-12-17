// App.js

import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Tareas from './Tareas';
import Home from './Home';
import SobreNosotros from './SobreNosotros';
import theme from './theme'; // Importa el tema personalizado

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light" />
      <Router>
        <Menu />
        <Routes>
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/" element={<Home />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
