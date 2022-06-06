import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { FormInput } from '../FormInput/FormInput';
import { FormStyled } from './EventForm.styled';

export const EventForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        register={register('eventName')}
        name="eventName"
        type="text"
        label="Event Name"
      />

      <FormInput
        register={register('description')}
        name="description"
        type="text"
        label="Description"
      />

      <FormInput
        register={register('date')}
        name="date"
        type="date"
        label="Date"
      />

      <FormInput
        register={register('time')}
        name="time"
        type="time"
        label="Time"
      />

      <Button type="submit" variant="primary">
        SUBMIT
      </Button>
    </FormStyled>
  );
};
