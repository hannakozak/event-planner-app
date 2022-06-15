import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { FormInput } from '../FormInput/FormInput';
import { FormStyled } from './SignupForm.styled';
import { useFetch } from '../../hooks/useFetch';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupSchema } from './SignupValidation';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export const SignupForm = () => {
  const { sendRequest, error } = useFetch();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(SignupSchema) });

  const onSubmit = async (data) => {
    await sendRequest(
      'http://localhost:8000/api/users/register',
      'POST',
      JSON.stringify(data),
      {
        'Content-Type': 'application/json',
      },
    );

    reset();
  };

  React.useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <ErrorMessage>{error as string}</ErrorMessage>
      <FormInput
        register={register('name')}
        name="name"
        type="text"
        label="name:"
      />
      <ErrorMessage>{errors.name?.message}</ErrorMessage>

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

      <FormInput
        register={register('repeat_password')}
        name="repeat_password"
        type="password"
        label="repeat password:"
      />
      <ErrorMessage>{errors.repeat_password?.message}</ErrorMessage>

      <Button type="submit" variant="primary">
        SUBMIT
      </Button>
    </FormStyled>
  );
};
