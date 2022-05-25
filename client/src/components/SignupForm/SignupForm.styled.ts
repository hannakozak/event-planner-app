import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 500px;
  padding: 30px 50px;
  width: 100vw;
  @media ${({ theme }) => theme.device.mobileM} {
    width: 70vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 40vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 30vw;
  }
`;

export const LabelStyled = styled.label`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '2rem')};
  font-weight: bold;
  width: 50%;
  padding: 0.5rem 2rem;
  margin-top: 3rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.primary3};
  color: ${({ theme }) => theme.colors.primary3};
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary5};
    border: 2px solid ${({ theme }) => theme.colors.primary5};
  }
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.primary4};
    border: 1px solid ${({ theme }) => theme.colors.primary4};
  }
`;
