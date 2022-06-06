import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { EventCalendar } from '../../components/EventCalendar/EventCalendar';

export const Dashboard = () => {
  const [authUser, setAuthUser] = useState<AuthUserType>();
  const { sendRequest } = useFetch();

  type AuthUserType = {
    _id: number;
    name: string;
    email: string;
  };

  const getUser = async () => {
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
      throw new Error('Problem with fetching data');
    }
  };

  useEffect(() => {
    getUser();
  }, [sendRequest]);

  return (
    <>
      <Header>
        {authUser && <p>Welcome, {authUser.name}! </p>}
        <div>log out</div>
      </Header>
      <EventCalendar />
      <Footer>Event Planner App</Footer>
    </>
  );
};
