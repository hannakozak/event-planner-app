import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes/theme';
import { GlobalStyle } from './styles/themes/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <BrowserRouter basename="/">
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <React.StrictMode>
          <CookiesProvider>
            <App />
          </CookiesProvider>
        </React.StrictMode>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
