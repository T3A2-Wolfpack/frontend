import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GetComments } from "../axios/Comments";
import { RetrieveWhiskeyFromApi } from "../axios/retrieveWhiskeyFromApi";
import { GlobalCommentContext } from "../hooks/globalComment";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";

// import { Link } from "react-router-dom";

function Whiskeys() {
  const { whiskeys } = useContext(GlobalWhiskeyContext);
  const { comments } = useContext(GlobalCommentContext)

  return (
    // returns full page div with bg responsive image
    <>
      <RetrieveWhiskeyFromApi />
      <GetComments />
      <button onClick={() => console.log(whiskeys)}>Whiskeys</button>
      <button onClick ={() => console.log(comments)}>Comments</button>
    </>

  );
}

export default Whiskeys;
