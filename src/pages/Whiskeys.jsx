import React, { useContext } from "react";
import { GlobalWhiskeyContext } from "../Hooks/GlobalWhiskey";

function Whiskeys() {
  const { whiskeys } = useContext(GlobalWhiskeyContext);

  return (
    <>
      <div className="text-3xl font-bold underline">
        Whiskeys whole catalogue
      </div>
      <h1>Whiskey Range: </h1>
      <ul>
        {whiskeys.map((singleWhiskey) => (
          <div>
            <ul>
              <li>Name:{singleWhiskey.name}</li>
              <li>Age: {singleWhiskey.age}</li>
              <li>Region: {singleWhiskey.region}</li>
            </ul>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Whiskeys;
