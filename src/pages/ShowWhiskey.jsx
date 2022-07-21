import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AddComment from "../components/comments/AddComment";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
import { GlobalCommentContext } from "../hooks/globalComment";
import { GetComments } from "../axios/Comments";
import NoWorkResult from "postcss/lib/no-work-result";
import StarRating from "../components/StarRating";
import WhiskeyDetails from "../components/WhiskeyDetails";

import { useAuth0 } from "@auth0/auth0-react";

import TastingDetailsPreview from "../components/TastingDetailsPreview";

import { RetrieveWhiskeyFromApi } from "../axios/RetrieveWhiskeyFromApi";
import TastingModal from "../components/TastingModal";
import { useState } from "react";

function ShowWhiskey() {
  const { whiskeys } = useContext(GlobalWhiskeyContext);
  const { comments } = useContext(GlobalCommentContext);
  const { user } = useAuth0();
  const { id } = useParams();
  const [whiskey] = whiskeys.filter((whiskey) => whiskey._id === id);
  const [starValues, setStarValues] = useState({
    visual: 0,
    nose: 0,
    palate: 0,
    finish: 0,
    average: 0,
  });

  return (
    <>
      {GetComments(id)}

      <div className="container mx-auto mt-10 mb-10 flex flex-col ">
        <div className="flex justify-between">
          <h3>{whiskey ? whiskey.name : null}</h3>
          <p>5 Stars</p>
        </div>
        <div className="flex justify-between">
          <img src={whiskey ? whiskey.image : null} className="w-20" />
          <p>{whiskey ? whiskey.description : null}</p>
          <p>{whiskey ? whiskey.age : null}</p>
          <p>{whiskey ? whiskey.region : null}</p>
          <p>{whiskey ? whiskey.type : null}</p>
          <p>{whiskey ? whiskey.price : null}</p>
        </div>
        <TastingModal
          starValues={starValues}
          setStarValues={setStarValues}
        ></TastingModal>
      </div>

      <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 pl-20 pr-20">
        {comments
          .filter((comment) => comment.whiskey_id === id)
          .map((comment) => (
            <TastingDetailsPreview
              comment={comment}
              user={user}
              starValues={starValues}
              whiskey_id={id}
            />
          ))}
      </div>
    </>
  );
}

export default ShowWhiskey;
