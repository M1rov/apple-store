import React from 'react';
import {Route, Routes} from 'react-router-dom'
import MainScreen from "../../blocks/MainScreen";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainScreen />} />
    </Routes>
  );
};

export default Router;