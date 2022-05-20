import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home/Home';
import { Signup } from './views/Signup/Signup';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
