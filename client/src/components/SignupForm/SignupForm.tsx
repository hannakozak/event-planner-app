import React from 'react';
import { Button } from '../Button/Button';
import { FormInput } from '../FormInput/FormInput';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { useForm } from 'react-hook-form';
import { useFetch } from '../../hooks/useFetch';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupSchema } from './SignupValidation';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FormStyled } from './SignupForm.styled';

//const API_URL = 'https://event-backend-o9rz.onrender.com';

export const SignupForm = () => {
  const { sendRequest, error } = useFetch();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(SignupSchema) });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await sendRequest(`/api/users/register`, 'POST', JSON.stringify(data), {
      'Content-Type': 'application/json',
    });

    const loginData = { email: data.email, password: data.password };
    await sendRequest(
      'https://event-backend-o9rz.onrender.com/api/users/login',
      'POST',
      JSON.stringify(loginData),
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    );
    navigate('/dashboard');
    toast.success('Account created!', {
      position: toast.POSITION.TOP_CENTER,
    });
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
