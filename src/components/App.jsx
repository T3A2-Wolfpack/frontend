import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
// import "../App.css";
import Nav from "./Nav";
import Home from "../pages/Home";
import NewWhiskey from "../pages/NewWhiskey";
import Whiskeys from "../pages/Whiskeys";
import ShowWhiskey from "../pages/ShowWhiskey";
import EditAWhiskey from "../pages/EditAWhiskey";
import Profile from "../pages/Profile";
import { RetrieveWhiskeyFromApi } from "../axios/RetrieveWhiskeyFromApi";
// import { ProtectedRoute } from "./ProtectedRoute";
// import { Loading } from "./Loading";
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
  // state where we are pushing the newly added whiskey

  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <Loading type={"cylon"} color={"red"} />;
  // }

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
              <Route path="/" element={<Home />} />
              <Route path="/whiskeys" element={<Whiskeys />} />
              {/* <Route
                path="/newwhiskey"
                element={<ProtectedRoute component={NewWhiskey} />}
              /> */}
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








