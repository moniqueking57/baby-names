import React from "react";

import "./App.css";
import BabyNamesData from "./BabyNamesData";
import SearchInfo from "./SearchInfo.js";

function App() {
  return (
    <div className="App">
      <div>
        <SearchInfo BabyNameIndex={BabyNamesData} />
      </div>
    </div>
  );
}

export default App;
