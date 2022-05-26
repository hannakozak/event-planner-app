import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { FormInput } from '../FormInput/FormInput';
import { FormStyled } from './LoginForm.styled';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const location = window.location.hostname;

    const settings = {
      method: 'POST',
      body: data,
    };
    try {
      const response = await fetch(
        `http://localhost:8000/api/users/login`,
        settings,
      );
      const responseData = await JSON.stringify(response);

      return responseData;
    } catch (err) {
      // Do something for an error here
      console.log(err);
    }
  };

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
