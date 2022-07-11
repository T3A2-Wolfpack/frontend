import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalWhiskeyContext } from "../Hooks/GlobalWhiskey";

function ShowWhiskey() {
  const { whiskeys } = useContext(GlobalWhiskeyContext);
  return (

        <>
              <ul>
                <li>Whiskey: {whiskeys.whiskey.name}</li>
                <li>Age: {whiskeys.whiskey.age}</li>
                <li>Type: {whiskeys.whiskey.type}</li>
              </ul>
        </>
  )
}

export default ShowWhiskey;
