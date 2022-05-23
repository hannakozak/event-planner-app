import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { FormInput } from '../FormInput/FormInput';
import { FormStyled } from './SignupForm.styled';

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const location = window.location.hostname;
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('image', data.image[0]);

    const settings = {
      method: 'POST',
      body: formData,
    };
    try {
      const response = await fetch(
        `https://${location}:8000/api/users/register`,
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
        register={register('name')}
        name="name"
        type="text"
        label="name:"
      />
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
      <FormInput
        register={register('repeat_password')}
        name="repeat_password"
        type="password"
        label="repeat password:"
      />
      <input type="file" {...register('image')} name="image" />

      <Button type="submit" variant="primary">
        SUBMIT
      </Button>
    </FormStyled>
  );
};
