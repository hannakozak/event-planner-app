import styled from 'styled-components';

export const InputStyled = styled.input`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  border: 1px solid ${({ theme }) => theme.colors.primary5};
  border-radius: 4px;
  padding: 0.5rem;
  font-weight: 500;
  &:hover,
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.primary3};
  }
`;

export const LabelStyled = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.colors.primary3};
  font-weight: 500;
  margin: 1rem 0;
`;
