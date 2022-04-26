import React from 'react';
import Router from "../../other/Router";
import Navbar from "../Navbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
