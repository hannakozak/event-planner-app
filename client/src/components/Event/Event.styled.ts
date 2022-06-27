import styled from 'styled-components';

export const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  color: ${({ theme }) => theme.colors.ebonyClay};
  padding: 2rem;
  font-size: 1.4rem;
`
export const EventTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
`
export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10rem;
`
