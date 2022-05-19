import { createGlobalStyle } from 'styled-components'
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
`;