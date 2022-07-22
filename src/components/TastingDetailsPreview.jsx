import Rating from "@mui/material/Rating";
import moment from "moment";
import { useState } from "react";
import { useContext } from "react";
import { DeleteComment } from "../axios/Comments";
import { GlobalCommentContext } from "../hooks/globalComment";
import TastingDetailsModal from "./TastingDetailsModal";

const TastingDetailsPreview = ({ comment, whiskey_id }) => {
  const { removeComment } = useContext(GlobalCommentContext);
  const { comments } = useContext(GlobalCommentContext);
  const [currentUser, setCurrentUser] = useState("");

  const fetchUser = async () => {
    const user = await fetch(
      `http://localhost:4000/api/tastings/${comment._id}/user`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await setCurrentUser(user)
    return { comment_id: comment._id};
  };

  const getUser = async () => {
    const user = await fetchUser();
    console.log(user);
    return user;
  };
  getUser();

  // console.log(getUser(comment.user_id));

  return (
    <div className="flex flex-col container p-3 rounded overflow-hidden shadow-lg">
      <div className="w-full flex justify-between">
        {/* <h3 className="">{getUser()}</h3> */}
        <Rating precision={0.25} readOnly value={comment.finalRating}></Rating>
      </div>

      <p className="mt-3 mb-3">{comment.finalComment}</p>
      <div className="w-full flex justify-between">
        <p className="text-sm italic opacity-75">
          {moment(comment.createdAt).format("YYYY-MM-DD")}
        </p>
      </div>
      <div className="flex justify-end">
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={async () =>
            DeleteComment(whiskey_id, comment._id, removeComment)
          }
        >
          Delete
        </button>
        <TastingDetailsModal comment={comment}></TastingDetailsModal>
      </div>
    </div>
  );
};

export default TastingDetailsPreview;
