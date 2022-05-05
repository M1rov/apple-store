import React from 'react';
import Router from "../../other/Router";
import Navbar from "../Navbar";
import Footer from "../Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
