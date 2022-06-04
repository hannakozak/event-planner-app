import React from 'react';
import { FooterStyled } from './Footer.styled';

export type ErrorProps = {
  children: React.ReactNode;
};

export const Footer = ({ children }: ErrorProps) => {
  return <FooterStyled>{children}</FooterStyled>;
};
