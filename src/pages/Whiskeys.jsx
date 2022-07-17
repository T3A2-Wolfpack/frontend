import React, { useContext } from "react";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
import { Link } from "react-router-dom";
import { RetrieveWhiskeyFromApi } from "../axios/RetrieveWhiskeyFromApi";

function Whiskeys() {
  const { whiskeys } = useContext(GlobalWhiskeyContext);

  return (
    <>
      <RetrieveWhiskeyFromApi />
      <h1>Whiskey Range: </h1>
      <ul>
        {whiskeys.map((singleWhiskey, index) => (
          <div>
            <ul>
              <Link to={`/whiskey/${singleWhiskey._id}`}>
                <li>ID: {singleWhiskey._id}</li>
              </Link>
              <li>Name:{singleWhiskey.name}</li>
              <li>Age: {singleWhiskey.age}</li>
              <li>Region: {singleWhiskey.region}</li>
              <button onClick={() => console.log(whiskeys)}> Console</button>
            </ul>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Whiskeys;
