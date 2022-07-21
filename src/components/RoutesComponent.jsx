import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Nav from "./Nav";
import Home from "../pages/Home";
import NewWhiskey from "../pages/NewWhiskey";
import Whiskeys from "../pages/Whiskeys";
import ShowWhiskey from "../pages/ShowWhiskey";
import EditAWhiskey from "../pages/EditAWhiskey";
import Profile from "../pages/Profile";
import { ProtectedRoute } from "./ProtectedRoute";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
import { GlobalCommentContext } from "../hooks/globalComment";

function RoutesComponent() {
  const { whiskeys } = useContext(GlobalWhiskeyContext);
  const { comments } = useContext(GlobalCommentContext);

  // HOCs to wrap whiskey container
  const ShowWhiskeyHOC = () => {
    const { id } = useParams();
    return <ShowWhiskey whiskey={whiskeys[id]} comment={comments[id]} />;
  };

  const EditWhiskeyHOC = () => {
    const { id } = useParams();
    return <EditAWhiskey whiskey={whiskeys[id]} />;
  };

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whiskeys" element={<Whiskeys />} />
        <Route
          path="/newwhiskey"
          element={<ProtectedRoute component={NewWhiskey} />}
        />
        <Route path="/whiskey/:id" element={<ShowWhiskeyHOC />} />
        <Route path="/whiskey/edit/:id" element={<EditWhiskeyHOC />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
