import React from 'react';
import { EventWrapper, EventTime, ActionButtons } from './Event.styled';
import { Text } from '../Typography/Typography';
import { Heading } from '../Typography/Typography';
import { EditEventForm } from '../EventForm/EditEventForm';
import { DeleteEvent } from '../DeleteEvent/DeleteEvent';

type EventType = {
  _id: number;
  title: string;
  description: string;
  start: Date;
  end: Date;
};

type EventProps = {
  selectedEvent: EventType;
  getEvents: () => Promise<any>;
  onCancel: (closeModal) => void;
};
export const Event = ({ selectedEvent, getEvents, onCancel }: EventProps) => {
  const startDate = selectedEvent.start.toString().slice(0, 16);
  const endDate = selectedEvent.end.toString().slice(0, 16);

  const startTime = selectedEvent.start.toString().slice(16, 21);
  const endTime = selectedEvent.end.toString().slice(16, 21);

  return (
    <EventWrapper>
      <EventTime>
        <div>
          {startDate} - {endDate}
        </div>
        <div>
          {' '}
          {startTime} - {endTime}
        </div>
      </EventTime>

      <Heading level={1} color={'#00ADB5'}>
        {selectedEvent.title}
      </Heading>
      <Text>{selectedEvent.description}</Text>
      <ActionButtons>
        <EditEventForm
          selectedEvent={selectedEvent}
          getEvents={getEvents}
          onCancel={onCancel}
        />
        <DeleteEvent
          selectedEvent={selectedEvent}
          getEvents={getEvents}
          onCancel={onCancel}
        />
      </ActionButtons>
    </EventWrapper>
  );
};
