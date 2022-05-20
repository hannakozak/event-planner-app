import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { InputStyled, LabelStyled, FormStyled } from './SignupForm.styled';

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <LabelStyled htmlFor="name">username</LabelStyled>
      <InputStyled id="name" {...register('name')} type="text" />

      <LabelStyled htmlFor="email">email</LabelStyled>
      <InputStyled id="email" {...register('email')} type="email" />

      <LabelStyled htmlFor="password">password</LabelStyled>
      <InputStyled id="password" {...register('password')} type="password" />

      <LabelStyled htmlFor="repeat_password">password</LabelStyled>
      <InputStyled
        id="repeat_password"
        {...register('repeat_password')}
        type="password"
      />
      <Button type="submit" variant="primary">
        SUBMIT
      </Button>
    </FormStyled>
  );
};
