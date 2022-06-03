import React, { createContext, useContext } from 'react';

type AuthContextType = {
  isAuthorized: () => boolean;
};

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

const AuthProvider = ({ children }: Props) => {
  const isAuthorized = () => {
    return document.cookie !== null;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
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
