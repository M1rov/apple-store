import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './blocks/App';
import {createGlobalStyle, DefaultTheme, ThemeProvider} from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    gray: '#EAEAEA',
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${theme.colors.gray};
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>
);
