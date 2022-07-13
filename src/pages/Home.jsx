import React from "react";
import App from "../components/App";
import { useContext } from "react";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
import AddComment from "../components/comments/AddComment";

function Home() {
    const { whiskeys } = useContext(GlobalWhiskeyContext);
  return (
    <>
      <div>Home</div>
      <button onClick={() => console.log(whiskeys)}>
        Whiskeys console log button
      </button>

      <p>{whiskeys}</p>
      
      <AddComment />

    </>
  );
}
export default Home;
