import React from 'react';
import { Button } from '../Button/Button';
import { FormInput } from '../FormInput/FormInput';
import { FormStyled } from './EventForm.styled';
import { useFetch } from '../../hooks/useFetch';
import DatePicker from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';

type EventFormProps = {
  getEvents: () => Promise<void>;
};

export const EventForm = ({ getEvents }: EventFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm();
  const { sendRequest } = useFetch();

  const onSubmit = async (data) => {
    console.log(data);
    await sendRequest('/api/events', 'POST', JSON.stringify(data), {
      'Content-Type': 'application/json',
      credentials: 'include',
    });
    getEvents();
  };

  React.useEffect(() => {
    setFocus('title');
  }, [setFocus]);

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        register={register('title')}
        name="title"
        type="text"
        label="Event Name"
      />

      <FormInput
        register={register('description')}
        name="description"
        type="text"
        label="Description"
      />
      <Controller
        control={control}
        name="start"
        render={({ field }) => (
          <DatePicker
            placeholderText="Select date"
            onChange={(date) => field.onChange(date)}
            selected={field.value}
            value={field.value}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="MMMM d, yyyy h:mm aa"
            className="form-control"
            id="start"
          />
        )}
      />
      <Controller
        control={control}
        name="end"
        render={({ field }) => (
          <DatePicker
            placeholderText="Select end date"
            onChange={(date) => field.onChange(date)}
            selected={field.value}
            value={field.value}
            timeFormat="HH:mm"
            dateFormat="MMMM d, yyyy h:mm aa"
            showTimeSelect
            className="form-control"
            id="end"
          />
        )}
      />

      <Button type="submit" variant="primary">
        SUBMIT
      </Button>
    </FormStyled>
  );
};
