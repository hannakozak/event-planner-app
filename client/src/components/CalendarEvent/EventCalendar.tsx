import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enGB from 'date-fns/locale/en-GB';

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
};
export const EventCalendar = ({ eventsList }: EventCalendarTypes) => {
  return (
    <>
      <Calendar
        localizer={localizer}
        events={eventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
      />
    </>
  );
};
