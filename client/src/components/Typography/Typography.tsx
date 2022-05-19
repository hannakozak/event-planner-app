import React from 'react';
import { HeadingStyled, TextStyled, LinkStyled } from './Typography.styled';

export type HeadingProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 'inherit';
  color?: string;
};

export type TextProps = {
  children: React.ReactNode;
  color?: string;
};

export type LinkProps = {
  children: React.ReactNode;
  color?: string;
  handleClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const Heading = ({ children, level, color }: HeadingProps) => {
  return (
    <HeadingStyled level={level} color={color}>
      {children}
    </HeadingStyled>
  );
};

export const Text = ({ children, color }: TextProps) => {
  return <TextStyled color={color}>{children}</TextStyled>;
};

export const Link = ({ children, color, handleClick }: LinkProps) => {
  return (
    <LinkStyled color={color} onClick={handleClick}>
      {children}
    </LinkStyled>
  );
};
