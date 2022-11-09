import React from 'react';
import Header from './components/Header';
import Mountain from './components/Mountain';
import Beaches from './components/Beaches';
import Birds from './components/Birds';
import Food from './components/Food';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path='/mountain' element={<Mountain />} />
          <Route path='/beaches' element={<Beaches />} />
          <Route path='/birds' element={<Birds />} />
          <Route path='/food' element={<Food />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
