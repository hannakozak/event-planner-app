import React, { createContext, useContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

type AuthContextType = {
  isAuthorized: () => boolean;
  authUser: unknown;
};

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

const AuthProvider = ({ children }: Props) => {
  const [authUser, setAuthUser] = useState<unknown>();
  const { sendRequest } = useFetch();

  const getAuthUser = async () => {
    const responseData = await sendRequest('/api/users/authUser', 'GET', null, {
      credentials: 'include',
    });
    setAuthUser(responseData);
  };

  useEffect(() => {
    getAuthUser();
  }, [sendRequest]);

  const isAuthorized = () => {
    return authUser !== undefined;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        authUser,
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
