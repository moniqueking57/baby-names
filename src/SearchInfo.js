import React from "react";
import SearchBar from "./SearchBar.js";

const SearchInfo = () => {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Names</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="babyName">Baby name</label>
            <div className="search-row">
              <input
                type="text"
                id="babyName"
                className="form-control"
                placeholder="Baby name"
              />
              <SearchBar />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchInfo;
