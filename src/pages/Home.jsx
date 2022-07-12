import React from "react";
import App from "../components/App";
import { useContext } from "react";
import { GlobalWhiskeyContext } from "../Hooks/GlobalWhiskey";

function Home() {
    const { whiskeys } = useContext(GlobalWhiskeyContext);
  return (
    <>
      <div>Home</div>
      <button onClick={() => console.log(whiskeys) }>Whiskeys console log button</button>
    
    </>
  );
}
export default Home;
