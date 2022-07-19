import React, { useContext } from "react";
import logo from "../images/hwhiskey-logo.png";



// useeffect here to get the whiskies
// useeffect sits with component about to be renderred.

function Home() { 
  return (
    // returns div with a responsive background
    <>
      <div className="grid items-start justify-center bg-hero bg-cover min-h-screen prose lg:prose-xl min-w-full">
        <h1 className="h-1 text-center text-white">Whiskey Taster</h1>
        <img className="pt-0" src={logo} />
      </div>
    </>
  );
}

export default Home;
