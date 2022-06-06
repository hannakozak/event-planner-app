import styled from 'styled-components';

export const CalendarContainer = styled.div`
  max-width: 600px;
  margin: auto;
  margin-top: 5.6rem;
  padding: 1rem;
  border-radius: 3px;
  font-size: ${({ theme }) => theme.fontSize.sm};

  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      background-color: ${({ theme }) => theme.colors.bondiBlue};
      font-weight: bold;
    }
    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    color: ${({ theme }) => theme.colors.ebonyClay};
  }

  button {
    margin: 3px;
    background-color: ${({ theme }) => theme.colors.bondiBlue};
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 5px 0;

    &:hover {
      background-color: ${({ theme }) => theme.colors.blueStone};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.turquoise};
    }
  }

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.6;

    &:hover {
      background-color: ${({ theme }) => theme.colors.blueStone};
    }
  }
  .react-calendar__month-view__days__day--weekend {
    color: #dfdfdf;
  }

  .react-calendar__tile--range {
    box-shadow: 0 0 1px 2px ${({ theme }) => theme.colors.charade};
  }

  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;
