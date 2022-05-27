import styled from 'styled-components';
import image from '../../assets/images/undraw_Mobile_login_re_9ntv.png';

export const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10rem;
  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: row;
  }
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
