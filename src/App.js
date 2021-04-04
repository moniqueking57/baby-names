import React from "react";

import "./App.css";
import { BabyNamesData } from "./BabyNamesData.json";
import SearchInfo from "./SearchInfo.js";

function App() {
  return (
    <div className="App">
      <div>
        <searchInfo babyNames={BabyNamesData} />
        <SearchInfo />
      </div>
    </div>
  );
}

export default App;
