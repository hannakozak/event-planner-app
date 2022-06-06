import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { CalendarContainer } from './EventCalendar.styled';

export const EventCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <CalendarContainer>
      <div>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p>
        <span>Selected Date:</span> {date.toDateString()}
      </p>
    </CalendarContainer>
  );
};
