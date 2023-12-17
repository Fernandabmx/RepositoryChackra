// Menu.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, useColorMode, ListItem, UnorderedList } from '@chakra-ui/react';

const Menu = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={4} bg="gray.200" mb={4}>
      <Button onClick={toggleColorMode} ml="auto">
        Modo Nocturno
      </Button>
      <UnorderedList styleType="none" m={0} p={0}>
        <ListItem color={colorMode === 'dark' ? 'black' : 'black'}>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem color={colorMode === 'dark' ? 'black' : 'black'}>
          <Link to="/tareas">Tareas</Link>
        </ListItem>
        <ListItem color={colorMode === 'dark' ? 'black' : 'black'}>
          <Link to="/sobrenosotros">Sobre Nosotros</Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Menu;
