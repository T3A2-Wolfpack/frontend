import React from "react";
import { Link } from "react-router-dom";

function ShowWhisky({ whiskey }) {
  return (
    <>
      <h2>{whiskey.name}</h2>
      <h3>{whiskey.age}</h3>
      <h4>{whiskey.type}</h4>
    </>
  );
}

export default ShowWhisky;
