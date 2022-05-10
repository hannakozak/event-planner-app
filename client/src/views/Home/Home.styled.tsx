import styled from 'styled-components';

export const HomeWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  text-align: center;
  border-radius: 15px;
`;
export const HomeImage = styled.img`
  width: 40%;
`;

export const HomeText = styled.div`
  padding: 1rem;
  & h1,
  h2 {
    color: ${({ theme }) => theme.colors.primary3};
  }
`;

export const HomeTitle = styled.h1``;
