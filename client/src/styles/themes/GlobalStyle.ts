import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  *,
  *::before,
  *::after {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
  }
  html {
  font-size: 62.5%;
}
  body {
    font-family: 'Raleway',sans-serif;
    font-size: 62.5%;
    line-height: 1.5;
    
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  input, button, textarea, select {
    font: inherit;
  }

  a {
    cursor: pointer;
    text-decoration: none;
}

input[type="file" i] {
     display: none;
}

.react-datepicker__header {
  background-color: ${({ theme }) => theme.colors.bondiBlue};
}

.react-datepicker {
  font-size: 1.2rem;
}
.react-datepicker__triangle {
 background-color: ${({ theme }) => theme.colors.bondiBlue};
}

.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {
  border-color: white;
}


.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,
.react-datepicker__month-text--selected,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--selected,
.react-datepicker__quarter-text--in-selecting-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--selected,
.react-datepicker__year-text--in-selecting-range,
.react-datepicker__year-text--in-range {
  background-color: ${({ theme }) => theme.colors.bondiBlue};
}
 .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
  background-color: ${({ theme }) => theme.colors.bondiBlue};
 }
`;
