import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="searchBox">
      <input
        className="searchBoxInput"
        placeholder="Search News"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
