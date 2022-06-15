import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Event } from '../Event/Event';
import { EventsWrapper } from './EventsList.styled';

type EventType = {
  _id: number;
  title: string;
  description: string;
  date: string;
  time: string;
};

export const EventsList = () => {
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

  useEffect(() => {
    getEvents();
  }, [sendRequest]);

  return (
    <EventsWrapper>
      {eventsList &&
        eventsList.map((event) => (
          <Event
            key={event._id}
            title={event.title}
            description={event.description}
            date={event.date}
            time={event.time}
          />
        ))}
    </EventsWrapper>
  );
};
