import React from "react";
import App from "../components/App";

function Home({ whiskeys }) {
  return (
    <>
      <div>Home</div>
      <ul>
        {whiskeys.map((individual, index) => (
          <div>
            <h2>Whiskey: {individual.name}</h2>
            <h4>Age: {individual.age}</h4>
            <h4>Type: {individual.type}</h4>
          </div>
        ))}
      </ul>
    </>
  );
}
export default Home;
