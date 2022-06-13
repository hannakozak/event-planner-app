import React, { useEffect, useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import Calendar from 'react-calendar';
import { CalendarContainer } from './EventCalendar.styled';

export type EventCalendarProps = {
  error?: undefined | FieldError;
  register: UseFormRegisterReturn;
  name: string;
};
export const convertDate = (date) => {
  return date.split('-').reverse().join('.');
};
export const EventCalendar = ({
  error,
  register,
  name,
}: EventCalendarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [eventDate, setEventDate] = useState('');

  const handleCalendar = () => {
    setIsVisible(true);
  };

  const handleDateChange = (value) => {
    setDate(value);
    setEventDate(`${date.toLocaleDateString()}`);
    setIsVisible(false);
  };
  useEffect(() => {
    setEventDate(`${date.toLocaleDateString()}`);
    {
      console.log(eventDate);
    }
  }, [date, eventDate]);

  return (
    <CalendarContainer onClick={handleCalendar}>
      <input
        id={name}
        value={eventDate}
        placeholder="YYYY / MM / DD"
        {...register}
        onChange={(e) => {
          handleDateChange(e);
        }}
      />
      <div>
        {isVisible && (
          <Calendar
            onChange={(e) => {
              handleDateChange(e);
            }}
            value={date}
          />
        )}
      </div>
    </CalendarContainer>
  );
};
