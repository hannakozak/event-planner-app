import React, { createContext, useContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

type AuthContextType = {
  isAuthorized: () => boolean;
  logout: () => Promise<void>;
};

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

const AuthProvider = ({ children }: Props) => {
  const { sendRequest } = useFetch();
  const navigate = useNavigate();

  const isAuthorized = () => {
    return document.cookie !== null;
  };

  const logout = async () => {
    try {
      await sendRequest('/api/users/logout', 'GET', null, {
        credentials: 'include',
      });
      navigate('/login');
    } catch (err) {
      throw new Error('Problem with logiut user');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
