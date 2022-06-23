import React, { ReactNode } from 'react';
import { ButtonStyled } from './Button.styled';

export type ButtonProps = {
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'caution';
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  isDisabled?: boolean;
  color?: string;
  fontSize?: number;
  margin?: string;
};

export const Button = ({
  children,
  type,
  variant,
  onClick,
  isDisabled,
  color,
  fontSize,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      onClick={onClick}
      type={type}
      variant={variant}
      disabled={isDisabled}
      color={color}
      fontSize={fontSize}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};
