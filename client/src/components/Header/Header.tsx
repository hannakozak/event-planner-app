import React from 'react';
import { HeaderStyled } from './Header.styled';

export type ErrorProps = {
  children: React.ReactNode;
};

export const Header = ({ children }: ErrorProps) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};
