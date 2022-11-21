import React from "react";
import Header from "./components/Header";
import Data from "./Data/Data";
import Search from "./components/Search";
import Mountain from "./components/Mountain";
import Beaches from "./components/Beaches";
import Birds from "./components/Birds";
import Food from "./components/Food";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Data>
      <Header />
      <div>
        <Routes>
          <Route path="/mountain" element={<Mountain Query="Mountain" />} />
          <Route path="/beaches" element={<Beaches Query="Beaches" />} />
          <Route path="/birds" element={<Birds Query="Birds" />} />
          <Route path="/food" element={<Food Query="Food" />} />
          <Route path="/search/:input" element={<Search />} />
        </Routes>
      </div>
    </Data>

  );
};

export default App;
