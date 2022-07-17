import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AddComment from "../components/comments/AddComment";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
import { GlobalCommentContext } from "../hooks/globalComment";
import { GetComments } from "../axios/Comments";
import NoWorkResult from "postcss/lib/no-work-result";

function ShowWhiskey() {
  const { whiskeys } = useContext(GlobalWhiskeyContext);
  const { comments } = useContext(GlobalCommentContext);
  const { id } = useParams();

  

  return (
    <>
      {GetComments(id)}
      <button onClick={() => console.log(comments)}>click</button>
      {whiskeys
        .filter((whiskey) => whiskey._id === id)
        .map((singleWhiskey) => (
          <>
            <li>Name: {singleWhiskey.name}</li>
            <li>Age: {singleWhiskey.age}</li>
            {/* Below gets the API call. now have to find out how to display it */}
          </>
        ))}
      <h3>Comments by previous tasters: </h3>
      {comments.filter((commentWhiskey) => commentWhiskey.whiskey === id).map((comment) => (
        <>
          <li>Nose Rating: {comment.nose.rating}</li>
          <li>Comment Rating: {comment.nose.comment}</li>
        </>
      ))}
      {/* <button onClick={() => GetComments(id)}>
        Show comments
      </button> */}
      <div>{/* <AddComment /> */}</div>
      {/* <h3>Comments</h3>
      <p>Comment: {comments[id].whiskey}</p>
      <p>Visual Rating: {comments[id].visual_rating}</p>
      <button onClick={() => console.log(comments)}>Debug for comments</button> */}
    </>
  );
}

export default ShowWhiskey;
