import styled from 'styled-components';

export const FooterStyled = styled.footer`
  position: fixed;
  z-index: 1;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 5.6rem;
  width: 100%;
  padding: 0 2rem;

  background-color: ${({ theme }) => theme.colors.bondiBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
`;


