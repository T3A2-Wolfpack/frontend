import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AddComment from "../components/comments/AddComment";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
import { GlobalCommentContext } from "../hooks/globalComment";

function ShowWhiskey() {
  const { whiskeys } = useContext(GlobalWhiskeyContext);
  const { comments } = useContext(GlobalCommentContext);
  const { id } = useParams();

  return (
    <>
      {whiskeys
        .filter((whiskey) => whiskey._id === id)
        .map((singleWhiskey) => (
          <>
            <li>Name: {singleWhiskey.name}</li>
            <li>Age: {singleWhiskey.age}</li>
          </>
        ))}
      <div>
        <AddComment />
      </div>{" "}
      {/* <h3>Comments</h3>
      <p>Comment: {comments[id].whiskey}</p>
      <p>Visual Rating: {comments[id].visual_rating}</p>
      <button onClick={() => console.log(comments)}>Debug for comments</button> */}
    </>
  );
}

export default ShowWhiskey;
