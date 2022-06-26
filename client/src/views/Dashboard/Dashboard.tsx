import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { EventForm } from '../../components/EventForm/EventForm';
import { EventCalendar } from '../../components/CalendarEvent/EventCalendar';
import { useAuth } from '../../context/authContext';
import { Main } from './Dashboard.styled';
import moment from 'moment';

type AuthUserType = {
  _id: number;
  name: string;
  email: string;
};

type EventType = {
  _id: number;
  title: string;
  description: string;
  start: Date;
  end: Date;
};

export const Dashboard = () => {
  const [authUser, setAuthUser] = useState<AuthUserType>();
  const [eventsList, setEventsList] = useState<EventType[]>([]);
  const { sendRequest } = useFetch();
  const { logout } = useAuth();

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
      setAuthUser(responseData.data);
    } catch (err) {
      throw new Error('Problem with fetching authUser');
    }
  };

  useEffect(() => {
    getAuthUser();
  }, []);

  const getEvents = async () => {
    try {
      const responseData = await sendRequest(
        '/api/events/userEvents',
        'GET',
        null,
        {
          credentials: 'include',
        },
      );
      const formatedEventList = responseData.data.map((event) => {
        const { _id, title, description, start, end } = event;
        return {
          _id,
          title,
          description,
          start: moment(start).toDate(),
          end: moment(end).toDate(),
        };
      });
      setEventsList(formatedEventList);
      console.log(responseData);
    } catch (err) {
      throw new Error('Problem with fetching events list');
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <Header>
        {authUser && <p>Welcome, {authUser.name}! </p>}
        <div onClick={() => logout()}>log out</div>
      </Header>
      <Main>
        <EventForm getEvents={getEvents} />
        <EventCalendar eventsList={eventsList} getEvents={getEvents} />
      </Main>
      <Footer>Event Planner App</Footer>
    </>
  );
};
