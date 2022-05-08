import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/blocks/App';
import {createGlobalStyle, DefaultTheme, ThemeProvider} from 'styled-components';
import {BrowserRouter} from "react-router-dom";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const theme: DefaultTheme = {
  colors: {
    primary: '#FFA542',
    secondary: '#838383',
    gray: '#EAEAEA',
    lightBlue: '#2eb1e0'
  }
}

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
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

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
);
