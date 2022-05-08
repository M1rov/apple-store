import React from 'react';
import Router from "../../other/Router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1 1 auto;
  }
`

const App: React.FC = () => {
  return (
    <StyledApp>
      <Navbar/>
      <Router/>
      <Footer/>
    </StyledApp>
  );
}

export default App;
