import React, { useState } from "react";

const SearchInfo = (props) => {
  const BabyNameIndex = props.BabyNameIndex;
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(BabyNameIndex);

  BabyNameIndex.sort(function (a, b) {
    var nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    const query = event.target.value;
    const filteredResults = BabyNameIndex.filter((baby) =>
      baby.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  const filterGender = (baby) => {
    console.log(baby);
    let babyArray = [...BabyNameIndex];
    if (baby !== "mf")
      babyArray = BabyNameIndex.filter((babyObj) => babyObj.sex === baby);
    setResults(babyArray);
  };

  return (
    <div className="searchBox">
      <button className="btn btn-dark" onClick={() => filterGender("mf")}>
        All
      </button>
      <button className="btn btn-danger" onClick={() => filterGender("f")}>
        Girls
      </button>
      <button className="btn btn-primary" onClick={() => filterGender("m")}>
        Boys
      </button>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <div
              style={{
                width: 200,
                margin: "auto",
              }}
            >
              <div className="search-row">
                <input
                  onChange={handleChange}
                  type="text"
                  id="babyName"
                  className="form-control"
                  placeholder="Search baby names..."
                />
              </div>
            </div>
          </form>
          <div>
            {results.map((baby) => (
              <div
                key={baby.id}
                onClick={(e) => props.favouriteFunction(e, baby.id)}
              >
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
