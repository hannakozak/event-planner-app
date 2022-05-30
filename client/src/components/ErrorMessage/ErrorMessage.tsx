import React from 'react';
import { TextStyled } from './ErrorMessage.styled';

export type ErrorProps = {
  children: React.ReactNode;
};

export const ErrorMessage = ({ children }: ErrorProps) => {
  return <TextStyled>{children}</TextStyled>;
};
