import React from "react";

function Search({ changeSearchPlants, searchPlants }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={ searchPlants }
        onChange={(e) => changeSearchPlants( e )}
      />
    </div>
  );
}

export default Search;
