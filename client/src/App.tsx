import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home/Home';
import { SignUp } from './views/Signup/Signup';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
