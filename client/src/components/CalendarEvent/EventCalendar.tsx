import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { Event } from '../Event/Event';
import { useModal } from '../../hooks/useModal';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enGB from 'date-fns/locale/en-GB';
import { CalendarWrapper } from './EventCalendar.styled';

const locales = {
  'en-UK': enGB,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

type EventType = {
  _id: number;
  title: string;
  description: string;
  start: Date;
  end: Date;
};

type EventCalendarTypes = {
  eventsList: EventType[];
  getEvents: () => Promise<any>;
};

export const EventCalendar = ({
  eventsList,
  getEvents,
}: EventCalendarTypes) => {
  const [selectedEvent, setSelectedEvent] = useState<EventType>();
  const { isModalVisible, toggleModalVisibility } = useModal();

  const handleSelectEvent = (event: EventType) => {
    setSelectedEvent(event);
    toggleModalVisibility();
  };

  const onCancel = (closeModal) => {
    toggleModalVisibility();
    closeModal();
  };
  const renderModal = (selectedEvent: EventType) => {
    return (
      <Modal
        isVisible={isModalVisible}
        onCancelSecondModal={onCancel}
        cancelButtonLabel="close"
      >
        <Event
          selectedEvent={selectedEvent}
          getEvents={getEvents}
          onCancel={onCancel}
        />
      </Modal>
    );
  };
  return (
    <CalendarWrapper>
      <Calendar
        localizer={localizer}
        events={eventsList}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        style={{ height: 600 }}
      />
      {selectedEvent && renderModal(selectedEvent)}
    </CalendarWrapper>
  );
};
