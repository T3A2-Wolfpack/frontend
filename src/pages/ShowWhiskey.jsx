import React, { useContext} from "react";
import { useParams } from "react-router-dom";
import { GlobalWhiskeyContext } from "../Hooks/GlobalWhiskey";

function ShowWhiskey() {
  const { whiskeys } = useContext(GlobalWhiskeyContext);
  const { id } = useParams();

  return (
    <>
      <ul>
        <li>Whiskey: {whiskeys.name}</li>
        <li>Age: {whiskeys.age}</li>
        <li>Type: {whiskeys.type}</li>
      </ul>
    </>
  );
}

export default ShowWhiskey;
