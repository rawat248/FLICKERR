import React, { useState } from "react";
import "./Form.css";
import PropTypes from "prop-types";

const Form = ({ searchHandler, navigate }) => {
  const [keyword, setKeyword] = useState("");

  const updateSearch = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form
      className="form"
      onSubmit={(e) => searchHandler(e, navigate, keyword)}
    >
      <input
        type="text"
        value={keyword}
        name="search"
        placeholder="Search..."
        onChange={updateSearch}
      />
      <button type="submit">
        <svg height="32" width="32">
          <path
            d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
            fill="#ffffff"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
};
Form.propTypes = {
  navigate: PropTypes.string.isRequired
};
Form.propTypes = {
  searchHandler: PropTypes.string.isRequired
};

export default Form;
