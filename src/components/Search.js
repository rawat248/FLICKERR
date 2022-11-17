import React from "react";
import { useParams } from "react-router-dom";
import Images from "./Images";

export const Search = () => {
  const { input } = useParams();
  const Search = input;
  return (
    <div>
      <h2>{Search} images</h2>
      <Images Search={Search} />
    </div>
  );
};
export default Search;
