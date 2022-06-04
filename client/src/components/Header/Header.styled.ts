import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5.6rem;
  width: 100%;
  padding: 0 2rem;

  background-color: ${({ theme }) => theme.colors.bondiBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
`;


