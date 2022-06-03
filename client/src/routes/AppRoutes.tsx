import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../views/Home/Home';
import { Signup } from '../views/Signup/Signup';
import { Login } from '../views/Login/Login';
import { Dashboard } from '../views/Dashboard/Dashboard';
import { AuthUserRoutes } from './AuthUserRoutes';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <AuthUserRoutes>
            <Dashboard />
          </AuthUserRoutes>
        }
      />
    </Routes>
  );
};
