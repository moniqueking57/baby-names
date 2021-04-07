import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import "./App.css";
import BabyNamesData from "./BabyNamesData";
import SearchInfo from "./SearchInfo.js";
import Favourites from "./Favourites.js";

function App() {
  const [favouriteArray, setFavouriteArray] = useState([]);
  const [babyNames, setBabyNames] = useState(BabyNamesData);
  const [gender, setGender] = useState("mf");

  const functionClick = (e, id) => {
    const babyNamesCopy = [...babyNames];
    const index = babyNamesCopy.findIndex((babyName) => babyName.id === id);
    const element = babyNamesCopy.splice(index, 1);
    const newFavourites = [...favouriteArray, ...element];
    console.log(babyNamesCopy);
    setFavouriteArray(newFavourites);
    setBabyNames(babyNamesCopy);
  };

  const removeFunctionClick = (e, id) => {
    const babyNamesCopyToo = [...favouriteArray];
    const indexToo = babyNamesCopyToo.findIndex(
      (babyName) => babyName.id === id
    );
    const elementToo = babyNamesCopyToo.splice(indexToo, 1);
    const removeNewBabies = [...babyNames, ...elementToo];
    setFavouriteArray(babyNamesCopyToo);
    setBabyNames(removeNewBabies);
  };

  return (
    <div className="App">
      <h1>Search Names </h1>
      <Favourites names={favouriteArray} remove={removeFunctionClick} />
      <div>
        <SearchInfo
          gender={gender}
          setGender={setGender}
          BabyNameIndex={babyNames}
          favouriteFunction={functionClick}
        />
      </div>
    </div>
  );
}

export default App;
