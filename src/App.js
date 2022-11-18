import React from "react";
import Header from "./components/Header";
import Data from "./Data/Data";
import Search from "./components/Search";
import Item from "./components/Item";
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const searchHandler = (e, navigate, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    const url = `/search/${searchInput}`;
    navigate(url);
  };
  return (
    <Data>
      <Header searchHandler={searchHandler} navigate={navigate} />
      <div>
        <Routes>
          <Route path="/mountain" element={<Item Search="Mountain" />} />
          <Route path="/beaches" element={<Item Search="Beaches" />} />
          <Route path="/birds" element={<Item Search="Birds" />} />
          <Route path="/food" element={<Item Search="Food" />} />
          <Route path="/search/:input" element={<Search />} />
        </Routes>
      </div>
    </Data>

  );
};

export default App;
