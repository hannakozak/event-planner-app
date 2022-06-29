import styled from 'styled-components';

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 10rem;

  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

export const SigninLink = styled.div`
  color: ${(props) => (props.color ? props.color : '#2F2E41')};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 500;
  margin: 0 8%;
  text-align: center;
`;

export const SignupImage = styled.img`
  width: 150%;
  @media ${({ theme }) => theme.device.mobileM} {
    width: 80%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 50%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 40%;
  }
`;
