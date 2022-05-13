import styled from 'styled-components';

export const HomeWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media ${({ theme }) => theme.device.tablet} {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: 2rem;
    text-align: center;
    border-radius: 15px;
  }
`;

export const HomeImage = styled.img`
  width: 100%;
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

export const HomeText = styled.div`
  margin: 2rem;
  letter-spacing: 1px;
  line-height: 1.6;

  & h1,
  h2 {
    color: ${({ theme }) => theme.colors.primary3};
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    & h1,
    h2 {
      color: ${({ theme }) => theme.colors.primary3};
      font-size: 2.5rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    & h1,
    h2 {
      color: ${({ theme }) => theme.colors.primary3};
      font-size: 3rem;
    }
  }
`;

export const HomeTitle = styled.h1``;
