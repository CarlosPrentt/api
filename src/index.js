import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import Characters from './components/characters/Characters';
import NavBar from './components/nav/NavBar';
import Episodes from './components/episodes/Episodes.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar />}>

        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/episodes' element={<Episodes />} />        
        {/* Con el * es por si ponemos una ruta diferente, entonces en Navigate to nos enviará al home */}
        <Route path='*' element={<Navigate replace to='/' />} />
      
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);