import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { FormInput } from '../FormInput/FormInput';
import { FormStyled, LabelStyled } from './SignupForm.styled';
import { ImageUploader } from '../ImageUploader/ImageUploader';

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const location = window.location.hostname;
    const formData = new FormData();
    console.log(data);

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('image', data.file[0]);

    const settings = {
      method: 'POST',
      body: formData,
    };
    try {
      const response = await fetch(
        `http://${location}:8000/api/users/register`,
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
      <LabelStyled>
        <FormInput
          register={register('file')}
          name="image"
          type="file"
          label="Pick an avatar"
        />
      </LabelStyled>

      <Button type="submit" variant="primary">
        SUBMIT
      </Button>
    </FormStyled>
  );
};
