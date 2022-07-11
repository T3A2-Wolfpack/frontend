import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "../App.css";
import Nav from "./Nav";
import Home from "../pages/Home";
import NewWhiskey from "../pages/NewWhiskey";
import Whiskeys from "../pages/Whiskeys";
import ShowWhiskey from "../pages/ShowWhiskey";

import { GlobalWhiskeyContext, GlobalWhiskeyProvider } from "../Hooks/GlobalWhiskey";

function App() {
  // state where we are pushing the newly added whiskey

  const { whiskeys } = useContext(GlobalWhiskeyContext)

  // // higher order component for showwhiskey
  const ShowWhiskeyHOC = () => {
    const { id } = useParams();
    return <ShowWhiskey whiskey={whiskeys[id]} />;
  };


  return (
    <GlobalWhiskeyProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whiskeys" element={<Whiskeys />} />
          <Route
            path="/newwhiskey"
            element={
              <NewWhiskey />
            }
          />
          <Route
            path="/whiskey/:id"
            element={<ShowWhiskeyHOC />}
          />
        </Routes>
      </BrowserRouter>
    </GlobalWhiskeyProvider>
  );
}

export default App;
