import React from 'react';
import styled, { css } from 'styled-components';

export type HeadingProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 'inherit';
  color?: string;
};

export const TextStyled = styled.p`
  color: ${(props) => (props.color ? props.color : '#2F2E41')};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;
  line-height: 3.2rem;
  margin: 0 0 2.4rem;
`;

export const LinkStyled = styled.span`
  color: ${(props) => (props.color ? props.color : '#00ADB5')};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 700;
  line-height: 3.2rem;
  margin: 0 0 2.4rem;
`;

export const HeadingStyled = styled('div').attrs<HeadingProps>(({ level }) => ({
  role: 'heading',
  'aria-level': level || 1,
})) <HeadingProps>`
  color: ${(props) => props.color};
  ${({ level }) =>
    level === 1 &&
    css` 
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 800; 
    line-height: 5rem;
    margin: 0 0 1rem; 
    text-align: center; 
     `}

  ${({ level }) =>
    level === 2 &&
    css`
      font-size: ${({ theme }) => theme.fontSize.lg};
    `}
  ${({ level }) =>
    level === 3 && css` font-size: ${({ theme }) => theme.fontSize.md};`}
  ${({ level }) =>
    level === 4 && css` font-size: ${({ theme }) => theme.fontSize.sm};`}
  ${({ level }) =>
    level === 5 && css` font-size: ${({ theme }) => theme.fontSize.xs};`}
  ${({ level }) =>
    level === 6 && css` font-size: ${({ theme }) => theme.fontSize.xxs};`}
`;
