import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { FormInput } from '../FormInput/FormInput';
import { FormStyled } from './EventForm.styled';
import { useFetch } from '../../hooks/useFetch';

export const EventForm = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm();
  const { sendRequest } = useFetch();

  const onSubmit = async (data) => {
    await sendRequest('/api/events', 'POST', JSON.stringify(data), {
      'Content-Type': 'application/json',
      credentials: 'include',
    });
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
      <FormInput
        register={register('date')}
        name="date"
        type="date"
        label="date"
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
