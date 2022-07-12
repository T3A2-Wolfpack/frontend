import React from "react";
import App from "../components/App";
import { useContext } from "react";
import { GlobalWhiskeyContext } from "../Hooks/GlobalWhiskey";

function Home() {
    const { whiskeys } = useContext(GlobalWhiskeyContext);
  return (
    <>
      <div>Home</div>
      <button>{ console.log(whiskeys) }Press me</button>
    
    </>
  );
}
export default Home;
