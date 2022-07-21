import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
// import "../App.css";
import Nav from "./Nav";
import Home from "../pages/Home";
import NewWhiskey from "../pages/NewWhiskey";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Whiskeys from "../pages/Whiskeys";
import ShowWhiskey from "../pages/ShowWhiskey";
import EditAWhiskey from "../pages/EditAWhiskey";
import Profile from "../pages/Profile";
import { RetrieveWhiskeyFromApi } from "../axios/RetrieveWhiskeyFromApi";
import { ProtectedRoute } from "./ProtectedRoute";
import { AuthContextProvider } from "../context/AuthContext";

import {
  GlobalWhiskeyContext,
  GlobalWhiskeyProvider,
} from "../hooks/GlobalWhiskey";
import {
  GlobalCommentContext,
  GlobalCommentProvider,
} from "../hooks/globalComment";

// define api from backend
const api = "http://localhost:4000/api/whiskeys";

function App() {


  const { whiskeys } = useContext(GlobalWhiskeyContext);
  const { comments } = useContext(GlobalCommentContext);

  // // higher order component for showwhiskey
  const ShowWhiskeyHOC = () => {
    const { id } = useParams();
    return <ShowWhiskey whiskey={whiskeys[id]} comment={comments[id]} />;
  };

  const EditWhiskeyHOC = () => {
    const { id } = useParams();
    return <EditAWhiskey whiskey={whiskeys[id]} />;
  };

  return (
    <AuthContextProvider>
      <GlobalCommentProvider>
        <GlobalWhiskeyProvider>
          <RetrieveWhiskeyFromApi />
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
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
        </GlobalWhiskeyProvider>
      </GlobalCommentProvider>
    </AuthContextProvider>
  );
}

export default App;
