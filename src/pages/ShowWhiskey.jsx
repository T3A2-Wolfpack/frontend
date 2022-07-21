import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
import { GlobalCommentContext } from "../hooks/globalComment";
import { GetComments } from "../axios/Comments";
import Rating from "@mui/material/Rating";
import TastingDetailsPreview from "../components/TastingDetailsPreview";
import TastingModal from "../components/TastingModal";
import { useAuthContext } from "../hooks/useAuthContext";

function ShowWhiskey() {
  const { whiskeys, editWhiskey } = useContext(GlobalWhiskeyContext);
  const { comments } = useContext(GlobalCommentContext);
  const { user } = useAuthContext();
  const { id } = useParams();
  const [whiskey] = whiskeys.filter((whiskey) => whiskey._id === id);
  GetComments(id);
  console.log(comments);
  console.log(user);

 
  const whiskeyRating = () => {
    let counter = 0;
    for (const element of comments) {
      counter = counter + element.finalRating;
    }
    return counter / comments.length;
  };

  const updateRating = async () => {
    const response = await fetch(`http://localhost:4000/api/whiskeys/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ ...whiskey, finalRating: whiskeyRating() }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
    }
  };

  // useEffect(() => {
  //   updateRating();
  // }, [comments]);

  // useEffect(() => {

  // }, [third])
  

  return (
    <>
      <div className="container mx-auto mt-10 mb-10 flex flex-col ">
        <div className="flex justify-between">
          <h3>{whiskey ? whiskey.name : null}</h3>
          <Rating
            value={comments ? whiskeyRating() : 0}
            precision={0.25}
            readOnly
          ></Rating>
        </div>
        <div className="flex justify-between">
          <img src={whiskey ? whiskey.image : null} className="w-20" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
            nemo a. Vero itaque ut maiores, cupiditate soluta pariatur alias non
            modi laborum cum eos qui voluptate? Suscipit eum eligendi voluptas?
          </p>
        </div>
        {user && comments.some((e) => e.user_id === user._id) ? (
          <>
            <div>You've already made a tasting</div>
          </>
        ) : (
          <TastingModal></TastingModal>
        )}
      </div>

      <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 pl-20 pr-20">
        {comments
          .filter((comment) => comment.whiskey_id === id)
          .map((comment) => (
            <TastingDetailsPreview
              comment={comment}
              user={user}
              whiskey_id={id}
            />
          ))}
      </div>
    </>
  );
}

export default ShowWhiskey;
