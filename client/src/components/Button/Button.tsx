import React, { ReactNode } from 'react';
import { ButtonStyled } from './Button.styled';

export type ButtonProps = {
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'caution';
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  color?: string;
  fontSize?: number;
};

export const Button = ({
  children,
  type,
  variant,
  handleClick,
  isDisabled,
  color,
  fontSize,
}: ButtonProps) => {
  return (
    <ButtonStyled
      onClick={handleClick}
      type={type}
      variant={variant}
      disabled={isDisabled}
      color={color}
      fontSize={fontSize}
    >
      {children}
    </ButtonStyled>
  );
};
