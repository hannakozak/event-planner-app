import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 90vw;
  margin: auto;
  font-size: 1.6rem;
  margin-bottom: 7rem;

 .rbc-toolbar button {
    background-color: ${({ theme }) => theme.colors.bondiBlue};
    border: 2px solid ${({ theme }) => theme.colors.bondiBlue};
    color: ${({ theme }) => theme.colors.white};
  }
  .rbc-toolbar button:hover {
    background-color: ${({ theme }) => theme.colors.blueStone};
    border: 2px solid ${({ theme }) => theme.colors.blueStone};
  }
  .rbc-toolbar button:focus {
    background-color: ${({ theme }) => theme.colors.teal};
    border: 1px solid ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
  }
  .rbc-event-content {
    background: ${({ theme }) => theme.colors.bondiBlue};
  }
  .rbc-event, .rbc-day-slot .rbc-background-event {
     background: ${({ theme }) => theme.colors.bondiBlue};
  }
  .rbc-show-more {
    color: ${({ theme }) => theme.colors.bondiBlue};
  }
  .rbc-toolbar .rbc-toolbar-label {
    color: ${({ theme }) => theme.colors.bondiBlue};
    font-size: 2.5rem;
    font-weight: bold;
  }
  .rbc-today {
    border: 1px solid ${({ theme }) => theme.colors.bondiBlue};
    background: ${({ theme }) => theme.colors.solitude};
  }

  .rbc-off-range-bg {
    background: ${({ theme }) => theme.colors.solitude};
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 80vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 80vw;
  }
`;

