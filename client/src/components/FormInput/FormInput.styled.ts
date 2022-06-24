import styled from 'styled-components';

export const InputStyled = styled.input`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  border: 1px solid ${({ theme }) => theme.colors.blueStone};
  border-radius: 4px;
  padding: 0.5rem;
  font-weight: 500;
  margin: 1rem 0;
  &:hover,
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.bondiBlue};
  }
`;

export const LabelStyled = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.colors.bondiBlue};
  font-weight: 500;
`;
