import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalWhiskeyContext } from "../Hooks/GlobalWhiskey";

function ShowWhiskey() {
  const { whiskeys } = useContext(GlobalWhiskeyContext);
  const { id } = useParams();

  return (
    <>
      <ul>
        <li>Whiskey: {whiskeys[id].name}</li>
        <li>Age: {whiskeys[id].age}</li>
        <li>Type: {whiskeys[id].type}</li>
      </ul>
    </>
  );
}

export default ShowWhiskey;
