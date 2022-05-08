import React from 'react';
import {Route, Routes} from 'react-router-dom'
import MainScreen from "../../blocks/MainScreen";
import BuyScreen from "../../blocks/BuyScreen";

const Router: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/buy/:category/:type' element={<BuyScreen />} />
      </Routes>
    </main>
  );
};

export default Router;