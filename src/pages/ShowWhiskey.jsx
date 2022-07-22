import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
import { GlobalCommentContext } from "../hooks/globalComment";
import { GetComments } from "../axios/Comments";
import { useAuth0 } from "@auth0/auth0-react";

import TastingDetailsPreview from "../components/TastingDetailsPreview";
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
    <div className="grid items-start justify-center bg-hero bg-cover min-h-screen prose lg:prose-xl min-w-full">

      {GetComments(id)}

      <div className="py-6 justify-between">
        <div className="flex max-w-[800px] bg-orange-200 shadow-lg rounded-3xl">
        <img src={whiskey ? whiskey.image : null} className="max-h-72 rounded-3xl" />
          <div className="w-2/3 p-4">
          <div className="pt-4 flex flex-row justify-between text-amber-900 font-bold text-2xl">{whiskey ? whiskey.name : null} <span>{whiskey.finalRating ? `${whiskey.finalRating} stars` : "Unrated"}</span></div>
          <p className="text-amber-600 text-sm">Origin: { whiskey ? whiskey.region : null }</p>
          <p className="mt-2 text-amber-600 text-sm">Type: { whiskey ? whiskey.type : null }</p>
          <p className="mt-2 text-amber-600 text-sm">Age: { whiskey ? (whiskey.age === 0 ? "No Statement" : whiskey.age) : null }</p>
          <p className="mt-2 text-amber-600 text-sm">{ whiskey ? whiskey.description : null }</p>
        <div className="flex item-center ">
        </div>
        <div className="flex flex-row justify-between">
          <div className="top-0 text-amber-700 font-bold text-lg">Price Range: {whiskey ? whiskey.price : null}</div>
          <div>
          <TastingModal
            starValues={starValues}
            setStarValues={setStarValues}
          ></TastingModal>
          </div>
        </div>
        </div>
      </div>
    </div>
      <div>
        
      </div>

      <div className="container  mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 pl-20 pr-20">
        {comments
          .filter((comment) => comment.whiskey_id === id)
          .map((comment) => (
            <TastingDetailsPreview
              comment={comment}
              
              user={user}
              starValues={starValues}
              whiskey_id={id}
            ></TastingDetailsPreview>
          ))}
      </div>
    </div>
  );
}

export default ShowWhiskey;
