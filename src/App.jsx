import { useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "../App.css";
import Nav from "./Nav";
import Home from "../pages/Home";
import NewWhiskey from "../pages/NewWhiskey";
import Whiskeys from "../pages/Whiskeys";
import ShowWhisky from "../pages/ShowWhisky";

import { GlobalWhiskeyProvider } from "../Hooks/GlobalWhiskey";

function App() {
  // state where we are pushing the newly added whiskey
  const [whiskeys, setWhiskeys] = useState([]);

  // higher order component for showwhiskey
  const ShowWhiskeyHOC = () => {
    const { id } = useParams();
    return <ShowWhisky whiskey={whiskeys[id]} />;
  };

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home whiskeys={whiskeys} />} />
        <Route path="/whiskeys" element={<Whiskeys whiskeys={whiskeys} />} />
        <Route
          path="/newwhiskey"
          element={<NewWhiskey whiskeys={whiskeys} setWhiskeys={setWhiskeys} />}
        />
        <Route
          path="/whiskey/:id"
          element={<ShowWhiskeyHOC whiskeys={whiskeys} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
