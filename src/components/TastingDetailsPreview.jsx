import Rating from "@mui/material/Rating";
import moment from "moment";
import { useContext } from "react";
import { DeleteComment } from "../axios/Comments";
import { GlobalCommentContext } from "../hooks/globalComment";
import TastingDetailsModal from "./TastingDetailsModal";

const TastingDetailsPreview = ({ comment, user, whiskey_id }) => {
  const { removeComment } = useContext(GlobalCommentContext);

  return (
    <div className="flex flex-col bg-orange-200 container p-3 rounded overflow-hidden shadow-lg">
      <div className="w-full flex justify-between">
        <h3 className="">{user ? user.email : null}</h3>
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
