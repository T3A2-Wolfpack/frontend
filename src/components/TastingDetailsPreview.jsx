import Rating from "@mui/material/Rating";
import moment from "moment";
import { useContext } from "react";
import { DeleteComment } from "../axios/Comments";
import { GlobalCommentContext } from "../hooks/globalComment";
import { useAuthContext } from "../hooks/useAuthContext";
import TastingDetailsModal from "./TastingDetailsModal";

const TastingDetailsPreview = ({ comment, whiskey_id }) => {
  const { removeComment } = useContext(GlobalCommentContext);
  const { user } = useAuthContext();

  return (
    <div className="flex flex-col bg-orange-200 container p-3 rounded overflow-hidden shadow-lg">
      <div className="w-full flex flex-wrap justify-between">
        <div className="text-3xl">{comment.user_name}</div>
        <Rating precision={0.25} readOnly value={comment.finalRating}></Rating>
      </div>
      <div className="flex flex-wrap max-w-screen-sm mt-3 mb-3">
        <p>{comment.finalComment}</p>
      </div>
      <div className="w-full flex justify-between">
        <p className="text-sm italic opacity-75">
          {moment(comment.createdAt).format("YYYY-MM-DD")}
        </p>
      </div>
      <div className="flex justify-end">
        {user && user._id == comment.user_id && (
          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={async () =>
              DeleteComment(whiskey_id, comment._id, removeComment)
            }
          >
            Delete
          </button>
        )}
        <TastingDetailsModal comment={comment}></TastingDetailsModal>
      </div>
    </div>
  );
};

export default TastingDetailsPreview;
