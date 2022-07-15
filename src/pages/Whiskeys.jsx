import React, { useContext } from "react";
import { RetrieveWhiskeyFromApi } from "../axios/retrieveWhiskeyFromApi";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
// import { Link } from "react-router-dom";

function Whiskeys() {
  const { whiskeys } = useContext(GlobalWhiskeyContext);

  return (
    // returns full page div with bg responsive image
    <>
      <RetrieveWhiskeyFromApi />
      <button onClick={() => console.log(whiskeys)}>Whiskeys</button>
    </>
  );
}

export default Whiskeys;
