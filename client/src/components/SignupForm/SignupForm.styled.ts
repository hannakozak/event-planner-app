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
  border: 2px solid ${({ theme }) => theme.colors.bondiBlue};
  color: ${({ theme }) => theme.colors.bondiBlue};
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.blueStone};
    border: 2px solid ${({ theme }) => theme.colors.blueStone};
  }
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.teal};
    border: 1px solid ${({ theme }) => theme.colors.teal};
  }
`;
