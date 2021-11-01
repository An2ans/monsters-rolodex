import React from "react";
import "./search.css";


const Search = ({placeholder, handleChange}) => (
  <input type = "search"
  className ="search"
  placeholder = {placeholder}
  onChange = { handleChange}
  />
);

export default Search
