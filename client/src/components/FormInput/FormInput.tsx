import React, { HTMLInputTypeAttribute } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { InputStyled, LabelStyled } from './FormInput.styled';

export type FormInputProps = {
  error?: undefined | FieldError;
  register: UseFormRegisterReturn;
  name: string;
  type: HTMLInputTypeAttribute;
  label: string;
  placeholder?: string;
};

export const FormInput = ({
  error,
  register,
  name,
  label,
  type,
  placeholder,
}: FormInputProps) => {
  return (
    <>
      <LabelStyled htmlFor={name}>{label}</LabelStyled>
      <InputStyled
        id={name}
        type={type}
        {...register}
        placeholder={placeholder}
      />
      {error && <span>{error.message}</span>}
    </>
  );
};
