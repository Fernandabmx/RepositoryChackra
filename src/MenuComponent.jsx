import React from 'react';
import { IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons';

const MenuComponent = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
      />
      <MenuList>
        <MenuItem>
          <NavLink to="/" exact activeClassName="active">
            Inicio
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/tareas" activeClassName="active">
            Tareas
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/sobrenosotros" activeClassName="active">
            Sobre Nosotros
          </NavLink>
        </MenuItem>
        {/* Agrega más elementos del menú según tus necesidades */}
      </MenuList>
    </Menu>
  );
};

export default MenuComponent;
