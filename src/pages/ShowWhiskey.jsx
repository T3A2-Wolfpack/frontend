import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
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
  const [currentUser, setCurrentUser] = useState("");

  GetComments(id);

  const whiskeyRating = () => {
    let counter = 0;
    for (const element of comments) {
      counter = counter + element.finalRating;
    }
    return counter / comments.length;
  };

  return (
    <div className="grid items-start justify-center bg-hero bg-cover min-h-screen prose lg:prose-xl min-w-full">
      <div className="py-6 flex justify-center">
        <div className="flex max-w-[800px] bg-orange-200 shadow-lg rounded-3xl">
          <img
            src={whiskey ? whiskey.image : null}
            className="max-h-72 rounded-3xl"
          />
          <div className="w-2/3 p-4">
            <div className="pt-4 flex flex-row justify-between text-amber-900 font-bold text-2xl">
              {whiskey ? whiskey.name : null}{" "}
              <span>
                <Rating
                  value={comments ? whiskeyRating() : 0}
                  precision={0.25}
                  readOnly
                ></Rating>
              </span>
            </div>
            <p className="text-amber-600 text-sm">
              Origin: {whiskey ? whiskey.region : null}
            </p>
            <p className="mt-2 text-amber-600 text-sm">
              Type: {whiskey ? whiskey.type : null}
            </p>
            <p className="mt-2 text-amber-600 text-sm">
              Age:{" "}
              {whiskey
                ? whiskey.age === 0
                  ? "No Statement"
                  : whiskey.age
                : null}
            </p>
            <p className="mt-2 text-amber-600 text-sm">
              {whiskey ? whiskey.description : null}
            </p>
            <div className="flex flex-row justify-between">
              <div className="top-0 text-amber-700 font-bold text-lg">
                Price Range: {whiskey ? whiskey.price : null}
              </div>

              {user && comments.some((e) => e.user_id === user._id) ? (
                <>
                  <div className="text-red-600 text-md mt-0">
                    You've already made a tasting!
                  </div>
                </>
              ) : (
                <TastingModal setCurrentUser={setCurrentUser}></TastingModal>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 pl-20 pr-20">
        {comments
          .filter((comment) => comment.whiskey_id === id)
          .map((comment) => (
            <TastingDetailsPreview
              comment={comment}
              whiskey_id={id}
              currentUser={currentUser}
              key={comment._id}
            ></TastingDetailsPreview>
          ))}
      </div>
    </div>
  );
}

export default ShowWhiskey;
{
  /* 

      <div className="flex justify-between">
          <h3>{whiskey ? whiskey.name : null}</h3>
          
      </div> */
}
