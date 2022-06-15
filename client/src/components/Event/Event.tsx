import React from 'react';
import { EventWrapper, EventTitle, EventTime } from './Event.styled';
import { Text } from '../Typography/Typography';

type EventType = {
  title: string;
  description: string;
  date: string;
  time: string;
};

export const Event = ({ title, description, date, time }: EventType) => {
  return (
    <EventWrapper>
      <EventTime>
        <div>{date}</div>
        <div>{time}</div>
      </EventTime>
      <EventTitle>{title}</EventTitle>
      <Text>{description}</Text>
    </EventWrapper>
  );
};
