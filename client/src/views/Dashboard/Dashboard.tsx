import React from 'react';
import { useAuth } from '../../context/authContext';

export const Dashboard = () => {
  const { isAuthorized, authUser } = useAuth();

  return (
    <>{isAuthorized() && <p>Welcome {(authUser as any).loginUser.name}</p>}</>
  );
};
