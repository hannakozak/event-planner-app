import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { EventForm } from '../../components/EventForm/EventForm';
import { EventsList } from '../../components/EventsList/EventsList';
import { useAuth } from '../../context/authContext';

export const Dashboard = () => {
  const [authUser, setAuthUser] = useState<AuthUserType>();
  const { sendRequest } = useFetch();
  const { logout } = useAuth();

  type AuthUserType = {
    _id: number;
    name: string;
    email: string;
  };

  const getAuthUser = async () => {
    try {
      const responseData = await sendRequest(
        '/api/users/authUser',
        'GET',
        null,
        {
          credentials: 'include',
        },
      );
      setAuthUser((responseData as any).data);
    } catch (err) {
      throw new Error('Problem with fetching authUser');
    }
  };

  useEffect(() => {
    getAuthUser();
  }, [sendRequest]);

  return (
    <>
      <Header>
        {authUser && <p>Welcome, {authUser.name}! </p>}
        <div onClick={() => logout()}>log out</div>
      </Header>
      <EventForm />
      <EventsList />
      <Footer>Event Planner App</Footer>
    </>
  );
};
