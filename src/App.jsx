import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './Menu'
import Tareas from './Tareas'
import Home from './Home'
import SobreNosotros from './SobreNosotros'

const App = () => {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/tareas" element={<Tareas/>} />
        <Route path="/" element={<Home/>} />,
        <Route path="/sobrenosotros" element={<SobreNosotros/>} />


        </Routes>
    </Router>
  );
};

export default App;
