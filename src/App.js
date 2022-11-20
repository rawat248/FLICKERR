import React from "react";
import Header from "./components/Header";
import Data from "./Data/Data";
import Search from "./components/Search";
import Item from "./components/Item";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Data>
      <Header />
      <div>
        <Routes>
          <Route path="/mountain" element={<Item Query="Mountain" />} />
          <Route path="/beaches" element={<Item Query="Beaches" />} />
          <Route path="/birds" element={<Item Query="Birds" />} />
          <Route path="/food" element={<Item Query="Food" />} />
          <Route path="/search/:input" element={<Search />} />
        </Routes>
      </div>
    </Data>

  );
};

export default App;
