import styled from 'styled-components';

export const InputStyled = styled.input`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  border: 1px solid ${({ theme }) => theme.colors.primary3};
  border-radius: 4px;
  padding: 0.5rem;
  font-weight: 500;
  &:hover,
  &:active {
    border: 2px solid ${({ theme }) => theme.colors.primary4};
  }
`;

export const LabelStyled = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.colors.primary3};
  font-weight: 500;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 500px;
  padding: 30px 50px;
`;
