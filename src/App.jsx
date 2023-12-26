import React from 'react';
import {
  ChakraProvider,
  ColorModeScript,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from '@chakra-ui/icons';
import theme from './theme'; // Importa el tema personalizado
import MenuComponent from './MenuComponent'; // Importa tu componente Menu personalizado
import Tareas from './Tareas';
import Home from './Home';
import SobreNosotros from './SobreNosotros'; // Importa el tema personalizado


const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light" />
      <Router>
        <MenuComponent /> {/* Nuevo componente de menú */}
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

