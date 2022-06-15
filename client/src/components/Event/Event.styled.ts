import styled from 'styled-components';

export const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 95vw;
  color: ${({ theme }) => theme.colors.ebonyClay};
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.bondiBlue};
  box-shadow: 0px 5px 10px 0px ${({ theme }) => theme.colors.bondiBlue}; 

  @media ${({ theme }) => theme.device.mobileM} {
    width: 90vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 50vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 50vw;
  }
`;

export const EventTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.ebonyClay};
  text-align: center;
`

export const EventTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

