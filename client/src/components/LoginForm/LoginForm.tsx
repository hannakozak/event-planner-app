import React from 'react';
import { Button } from '../Button/Button';
import { FormInput } from '../FormInput/FormInput';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useFetch } from '../../hooks/useFetch';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from './LoginValidation';
import { toast } from 'react-toastify';
import { FormStyled } from './LoginForm.styled';

export const LoginForm = () => {
  const { sendRequest, error } = useFetch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const onSubmit = async (data) => {
    await sendRequest(`$/api/users/login`, 'POST', JSON.stringify(data), {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    navigate('/dashboard');
    toast.success('Log in successful!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  React.useEffect(() => {
    setFocus('email');
  }, [setFocus]);

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
