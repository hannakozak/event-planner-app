import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 5rem;

  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

export const SignupLink = styled.div`
  color: ${(props) => (props.color ? props.color : '#2F2E41')};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 500;
  margin: 0 5%;
  text-align: center;
`;

export const LoginImage = styled.img`
  width: 100%;
  @media ${({ theme }) => theme.device.mobileM} {
    width: 80%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 70%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 40%;
  }
`;
