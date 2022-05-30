import styled from 'styled-components';

export const TextStyled = styled.p`
  color: ${({ theme }) => theme.colors.persianRed};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 500;
  line-height: 3.2rem;
  margin: 0 0 1rem;
`;


