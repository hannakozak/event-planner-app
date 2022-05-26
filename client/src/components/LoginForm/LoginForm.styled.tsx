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
