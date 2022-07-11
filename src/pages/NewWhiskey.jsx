import React, { useState } from "react";
import Whiskeys from "./Whiskeys";

// state is an object.
function NewWhiskey({ whiskeys, setWhiskeys }) {
  const [whiskey, setWhiskey] = useState({
    name: "",
    age: "",
    region: "",
    type: "",
    budget: "",
  });

  // onchange input below
  const handleNameInputChange = (e) => {
    setWhiskey({ ...whiskey, name: event.target.value });
  };

  const handleAgeInputChange = (e) => {
    setWhiskey({ ...whiskey, age: event.target.value });
  };

  const handleRegionInputChange = (e) => {
    setWhiskey({ ...whiskey, region: e.target.value });
  };

  const handleTypeInputChange = (e) => {
    setWhiskey({ ...whiskey, type: e.target.value });
  };

  const handleBudgetInputChange = (e) => {
    setWhiskey({ ...whiskey, budget: e.target.value });
  };

  // Pushes whiskey states to whiskeys array in app
  const formSubmit = (e) => {
    e.preventDefault();
    const pushArray = [...whiskeys];
    pushArray.push(whiskey);
    setWhiskeys(pushArray);
  };

  return (
    <>
      <div>NewWhiskey</div>
      <form onSubmit={formSubmit}>
        <div>
          <h2>Whiskey name</h2>
          <textarea
            cols="20"
            rows="1"
            value={whiskey.name}
            onChange={handleNameInputChange}
          ></textarea>
        </div>
        <div>
          <h2>Whiskey age</h2>
          <textarea
            cols="20"
            rows="1"
            value={whiskey.age}
            onChange={handleAgeInputChange}
          ></textarea>
        </div>
        <div>
          <h2>Region</h2>
          <textarea
            cols="20"
            rows="1"
            value={whiskey.region}
            onChange={handleRegionInputChange}
          ></textarea>
        </div>
        <div>
          <h2>Type</h2>
          <textarea
            cols="20"
            rows="1"
            value={whiskey.type}
            onChange={handleTypeInputChange}
          ></textarea>
        </div>
        <div>
          <h2>Budget</h2>
          <textarea
            cols="20"
            rows="1"
            value={whiskey.budget}
            onChange={handleBudgetInputChange}
          ></textarea>
        </div>
        <button>Add whiskey</button>
      </form>
    </>
  );
}

export default NewWhiskey;
