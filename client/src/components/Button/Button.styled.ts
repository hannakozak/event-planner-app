import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '2rem')};
  font-weight: bold;
  padding: 0.5rem 2rem;
  margin: 2rem 0rem;
  border-radius: 4px;

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${({ theme }) => theme.colors.bondiBlue};
      border: 2px solid ${({ theme }) => theme.colors.bondiBlue};
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        background-color: ${({ theme }) => theme.colors.blueStone};
        border: 2px solid ${({ theme }) => theme.colors.blueStone};
      }
      &:focus,
      &:active {
        background-color: ${({ theme }) => theme.colors.teal};
        border: 1px solid ${({ theme }) => theme.colors.teal};
      }
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      border: 2px solid ${({ theme }) => theme.colors.bondiBlue};
      color: ${({ theme }) => theme.colors.bondiBlue};

      &:hover {
        color: ${({ theme }) => theme.colors.blueStone};
        border: 2px solid ${({ theme }) => theme.colors.blueStone};
      }
      &:focus,
      &:active {
        color: ${({ theme }) => theme.colors.teal};
        border: 1px solid ${({ theme }) => theme.colors.teal};
      }
    `}
  
    ${({ variant }) =>
    variant === 'caution' &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.persianRed};
      border: 2px solid ${({ theme }) => theme.colors.persianRed};

      &:hover,
      &:focus,
      &:active {
        background-color: ${({ theme }) => theme.colors.persianRed};
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;
