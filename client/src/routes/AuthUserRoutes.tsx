import React from 'react';
import { useAuth } from '../context/authContext';
import { useLocation, Navigate } from 'react-router-dom';

type Props = {
  children: JSX.Element;
};

export const AuthUserRoutes = ({ children }: Props) => {
  const { isAuthorized } = useAuth();
  const location = useLocation();

  if (!isAuthorized()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};
