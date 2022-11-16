import axios from "axios";
import React, { createContext, useState } from "react";
import { apiKey } from "../components/Api";
import PropTypes from "prop-types";

export const Image = createContext();
const Data = ({ children }) => {
  const [state, setState] = useState([]);
  const getData = (query) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setState(response.data.photos.photo);
      });
  };

  return <Image.Provider value={{ state, getData }}>{children}</Image.Provider>;
};

Data.propTypes = {
  children: PropTypes.string.isRequired
};

export default Data;
