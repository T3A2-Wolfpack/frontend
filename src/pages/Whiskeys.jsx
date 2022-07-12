import React, { useContext } from "react";
import { GlobalWhiskeyContext } from "../Hooks/GlobalWhiskey";

function Whiskeys() {
  const { whiskeys, removeWhiskey } = useContext(GlobalWhiskeyContext);

  return (
    <>
      <h1>Whiskey Range: </h1>
      <ul>
        {whiskeys.map((singleWhiskey) => (
          <div>
            <ul>
              <li>ID: {singleWhiskey.id}</li>
              <li>Name:{singleWhiskey.name}</li>
              <li>Age: {singleWhiskey.age}</li>
              <li>Region: {singleWhiskey.region}</li>
              <button onClick={() => removeWhiskey(singleWhiskey.id)}>
                Remove
              </button>
            </ul>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Whiskeys;
