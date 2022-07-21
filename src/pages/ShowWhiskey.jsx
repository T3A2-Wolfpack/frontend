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
    <>

      {GetComments(id)}

      <div className="container mx-auto mt-10 mb-10 flex flex-col ">
        <div className="flex justify-between">
          <h3>{whiskey ? whiskey.name : null}</h3>
          <p>5 Stars</p>
        </div>
        <div className="flex justify-between">
          <img src={whiskey ? whiskey.image : null} className="w-20" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
            nemo a. Vero itaque ut maiores, cupiditate soluta pariatur alias non
            modi laborum cum eos qui voluptate? Suscipit eum eligendi voluptas?
          </p>
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
