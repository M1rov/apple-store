import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/blocks/App';
import {createGlobalStyle, DefaultTheme, ThemeProvider} from 'styled-components';
import {BrowserRouter} from "react-router-dom";

const theme: DefaultTheme = {
  colors: {
    primary: '#FFA542',
    secondary: '#838383',
    gray: '#EAEAEA',
  }
}

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Montserrat', serif;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${theme.colors.gray};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
);
