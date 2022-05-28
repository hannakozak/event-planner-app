import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { FormInput } from '../FormInput/FormInput';
import { FormStyled } from './LoginForm.styled';
import { useFetch } from '../../hooks/useFetch';
export const LoginForm = () => {
  const { sendRequest, error } = useFetch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const responseData = await sendRequest(
      '/api/users/login',
      'POST',
      JSON.stringify(data),
      {
        'Content-Type': 'application/json',
      },
    );
  };
  console.log(error);
  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        register={register('email')}
        name="email"
        type="email"
        label="email:"
      />
      <FormInput
        register={register('password')}
        name="password"
        type="password"
        label="password:"
      />

      <Button type="submit" variant="primary">
        SUBMIT
      </Button>
    </FormStyled>
  );
};
