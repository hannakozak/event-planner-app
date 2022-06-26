import styled from 'styled-components';

export const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  color: ${({ theme }) => theme.colors.ebonyClay};
  padding: 1rem;
  font-size: 1.4rem;

  @media ${({ theme }) => theme.device.mobileM} {
    
  }
  @media ${({ theme }) => theme.device.tablet} {
    
  }
  @media ${({ theme }) => theme.device.laptop} {
    
  }
`;

export const EventTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.ebonyClay};
`

export const EventTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

