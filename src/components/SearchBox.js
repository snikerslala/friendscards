import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="tc ">
      <input
        id="search-box"
        type="text"
        placeholder="search a friend"
        className="f4 b w-60 pa2 mb3 tc ba bg-washed-yellow"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
