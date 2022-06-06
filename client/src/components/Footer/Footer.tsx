import React from 'react';
import { FooterStyled } from './Footer.styled';

export type FooterProps = {
  children: React.ReactNode;
};

export const Footer = ({ children }: FooterProps) => {
  return <FooterStyled>{children}</FooterStyled>;
};
