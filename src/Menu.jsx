import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul className='d-flex'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
        <li><Link to="/tareas">Lista de Tareas</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;