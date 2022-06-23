import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Button } from '../../components/Button/Button';
import { Modal } from '../../components/Modal/Modal';
import { EventForm } from '../../components/EventForm/EventForm';
import { EventCalendar } from '../../components/CalendarEvent/EventCalendar';
import { useAuth } from '../../context/authContext';
import { useModal } from '../../hooks/useModal';
import { Main } from './Dashboard.styled';
import moment from 'moment';

export const Dashboard = () => {
  const [authUser, setAuthUser] = useState<AuthUserType>();
  const [eventsList, setEventsList] = useState<any>();
  const { sendRequest } = useFetch();
  const { logout } = useAuth();
  const { isModalVisible, toggleModalVisibility } = useModal();

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
      const formatedEventList = (responseData as any).data.map((event) => {
        const { title, description, start, end } = event;
        return {
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
        <Button type="button" variant="primary" onClick={toggleModalVisibility}>
          Add Event
        </Button>
        <Modal
          title="Add New Event"
          isVisible={isModalVisible}
          onSubmit={toggleModalVisibility}
          onCancel={toggleModalVisibility}
        >
          <EventForm getEvents={getEvents} />
        </Modal>
        <EventCalendar eventsList={eventsList} />
      </Main>
      <Footer>Event Planner App</Footer>
    </>
  );
};
