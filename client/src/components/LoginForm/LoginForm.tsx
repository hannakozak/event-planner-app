import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { FormInput } from '../FormInput/FormInput';
import { FormStyled } from './LoginForm.styled';
import { useFetch } from '../../hooks/useFetch';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from './LoginValidation';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export const LoginForm = () => {
  const { sendRequest, error } = useFetch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const onSubmit = async (data) => {
    await sendRequest('/api/users/login', 'POST', JSON.stringify(data), {
      'Content-Type': 'application/json',
    });
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <ErrorMessage>{error as string}</ErrorMessage>
      <FormInput
        register={register('email')}
        name="email"
        type="email"
        label="email:"
      />
      <ErrorMessage>{errors.email?.message}</ErrorMessage>

      <FormInput
        register={register('password')}
        name="password"
        type="password"
        label="password:"
      />
      <ErrorMessage>{errors.password?.message}</ErrorMessage>

      <Button type="submit" variant="primary">
        SUBMIT
      </Button>
    </FormStyled>
  );
};