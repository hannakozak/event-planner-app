import styled from 'styled-components';

export const SignupWrapper = styled.div`
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

export const SignupImage = styled.img`
  width: 50%;
  @media ${({ theme }) => theme.device.mobileM} {
    width: 70%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 50%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 40%;
  }
`;

