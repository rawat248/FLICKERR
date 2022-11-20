import React from "react";
import { useParams } from "react-router-dom";
import Images from "./Images";

export const Search = () => {
  const { input } = useParams();

  return (
    <div>
      <h2>{input} images</h2>
      <Images Query={input} />
    </div>
  );
};
export default Search;
