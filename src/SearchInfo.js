import React, { useState } from "react";
import BabyNameIndex from "./BabyNamesData";
import SearchBar from "./SearchBar.js";

const SearchInfo = (props) => {
   const { BabyNameIndex } = props;
   const [searchTerm, setSearchTerm] = useState("");
  BabyNameIndex.sort(function (a, b) {
    var nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
    const results = BabyNameIndex.filter((baby) => (baby.name).toLowerCase().includes(searchTerm.toLowerCase()));

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
                onChange={handleChange}
                type="text"
                id="babyName"
                className="form-control"
                placeholder="Baby name"
              />
              <SearchBar />
            </div>
          </form>
          <div>
            {results.map((baby) => (
              <div key={baby.id}>
                {baby.sex === "f" ? (
                  <div
                    style={{
                      backgroundColor: "pink",
                      width: 200,
                      margin: "auto",
                    }}
                  >
                    <h3 style={{ color: "white" }} key={baby.id}>
                      {baby.name}
                    </h3>
                  </div>
                ) : (
                  <div
                    style={{
                      backgroundColor: "blue",
                      width: 200,
                      margin: "auto",
                    }}
                  >
                    <h3 style={{ color: "white" }} key={baby.id}>
                      {baby.name}
                    </h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInfo;
