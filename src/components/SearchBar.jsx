import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../src/index.css";

function SearchBar({ whiskeys }) {
  const [search, setSearch] = useState([]);

  const handleSearch = (e) => {
    const searchWhiskey = e.target.value;
    const filterWhiskey = whiskeys.filter((value) => {
      return value.name.toLowerCase().includes(searchWhiskey.toLowerCase())
    });
    if (searchWhiskey === "") {
      setSearch([]);
    } else {
        setSearch(filterWhiskey)

    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search Whiskey..."
          onChange={handleSearch}
        />

        {/* Search icon */}
        <div className="icons">
          {/* <SearchCircleIcon className="searchIcon" /> */}
        </div>
        {/* {searchWhiskey.length === 0 ? <Show search icon> : <show close icon onClick>} */}
      </div>
      {search.length != 0 && (
        <div className="result">
          {search.map((value, key) => {
            return (
              <Link to={`/whiskey/${value._id}`} className="individualResult" >
                    <p> {value.name} </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
