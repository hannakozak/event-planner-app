import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '2rem')};
  font-weight: ${({ theme }) => theme.text.regular};
  padding: 0.5rem 2rem;
  margin: 2rem;

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${({ theme }) => theme.colors.primary3};
      border: 2px solid ${({ theme }) => theme.colors.primary3};
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary5};
        border: 2px solid ${({ theme }) => theme.colors.primary5};
      }
      &:focus,
      &:active {
        background-color: ${({ theme }) => theme.colors.primary4};
        border: 1px solid ${({ theme }) => theme.colors.primary4};
      }
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      border: 2px solid ${({ theme }) => theme.colors.primary3};
      color: ${({ theme }) => theme.colors.primary3};

      &:hover {
        color: ${({ theme }) => theme.colors.primary5};
        border: 2px solid ${({ theme }) => theme.colors.primary5};
      }
      &:focus,
      &:active {
        color: ${({ theme }) => theme.colors.primary4};
        border: 1px solid ${({ theme }) => theme.colors.primary4};
      }
    `}
  
    ${({ variant }) =>
    variant === 'caution' &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.caution};
      border: 2px solid ${({ theme }) => theme.colors.caution};

      &:hover,
      &:focus,
      &:active {
        background-color: ${({ theme }) => theme.colors.caution};
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;
