import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { EventsWrapper } from './DailyEventList.styled';

type EventType = {
  title: string;
  description: string;
  date: string;
  time: string;
};

export const DailyEventsList = () => {
  const [eventsList, setEventsList] = useState<EventType[]>();
  const { sendRequest } = useFetch();

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
      setEventsList((responseData as any).data);
      console.log(responseData);
    } catch (err) {
      throw new Error('Problem with fetching events list');
    }
  };
  const currentDate = new Date().toLocaleDateString();

  const convertDate = (date) => {
    return date.split('-').reverse().join('/');
  };

  useEffect(() => {
    getEvents();
  }, [sendRequest]);

  return (
    <EventsWrapper>
      <h1>Daily Events</h1>

      {eventsList &&
        eventsList
          .map((event) => convertDate(event.date))
          .filter((date) => date === currentDate)}
      <br />
      {currentDate}
    </EventsWrapper>
  );
};
