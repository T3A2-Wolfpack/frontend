import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "../App.css";
import Nav from "./Nav";
import Home from "../pages/Home";
import NewWhiskey from "../pages/NewWhiskey";
import Whiskeys from "../pages/Whiskeys";
import ShowWhiskey from "../pages/ShowWhiskey";
import EditAWhiskey from "../pages/EditAWhiskey";

import {
  GlobalWhiskeyContext,
  GlobalWhiskeyProvider,
} from "../hooks/GlobalWhiskey";
import { GlobalCommentProvider, GlobalCommentContext } from "../hooks/globalComment";

function App() {
  // state where we are pushing the newly added whiskey

  const { whiskeys } = useContext(GlobalWhiskeyContext);

  // // higher order component for showwhiskey
  const ShowWhiskeyHOC = () => {
    const { id } = useParams();
    return <ShowWhiskey whiskey={whiskeys[id]} />;
  };

  const EditWhiskeyHOC = () => {
    const { id } = useParams();
    return <EditAWhiskey whiskey={whiskeys[id]} />;
  };

  return (
    <GlobalCommentProvider>
      <GlobalWhiskeyProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whiskeys" element={<Whiskeys />} />
            <Route path="/newwhiskey" element={<NewWhiskey />} />
            <Route path="/whiskey/:id" element={<ShowWhiskeyHOC />} />
            <Route path="/whiskey/edit/:id" element={<EditWhiskeyHOC />} />
          </Routes>
        </BrowserRouter>
      </GlobalWhiskeyProvider>
    </GlobalCommentProvider>
  );
}

export default App;
