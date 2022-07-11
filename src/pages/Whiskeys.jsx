import React from "react";

function Whiskeys({ whiskeys }) {
  return (
    <>
      <div className="text-3xl font-bold underline">
        Whiskeys whole catalogue
      </div>
      <h1>Whiskey Range: </h1>
      <ul>
        {whiskeys.map((singleWhiskey) => (
          <li>{singleWhiskey.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Whiskeys;
