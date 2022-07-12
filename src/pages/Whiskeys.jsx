import React, { useContext } from "react";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
import { Link } from "react-router-dom";

function Whiskeys() {
  const { whiskeys, removeWhiskey } = useContext(GlobalWhiskeyContext);

  return (
    <>
      <h1>Whiskey Range: </h1>
      <ul>
        {whiskeys.map((singleWhiskey, index) => (
          <div>
            <ul>
              <Link to={`/whiskey/${index}`}><li>ID: {singleWhiskey.id}</li></Link>
              <li>Name:{singleWhiskey.name}</li>
              <li>Age: {singleWhiskey.age}</li>
              <li>Region: {singleWhiskey.region}</li>
              <Link to={`/whiskey/edit/${index}`}>Edit</Link>
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
