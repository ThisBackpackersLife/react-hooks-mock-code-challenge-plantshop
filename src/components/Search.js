import React from "react";

function Search({ filterPlants, searchPlants }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={ searchPlants }
        onChange={(e) => filterPlants( id )}
      />
    </div>
  );
}

export default Search;
