import Rating from "@mui/material/Rating";
import moment from "moment";
import { useContext } from "react";
import { DeleteComment } from "../axios/Comments";
import { GlobalCommentContext } from "../hooks/globalComment";

const TastingDetailsPreview = ({ comment, user, starValues, whiskey_id }) => {
  const { removeComment } = useContext(GlobalCommentContext);

  return (
    <div className="flex flex-col container p-3 rounded overflow-hidden shadow-lg">
      <div className="w-full flex justify-between">
        <h3 className="">{user ? user.email : null}</h3>
        <Rating precision={0.25} readOnly value={starValues.average}></Rating>
      </div>

      <p className="mt-3 mb-3">{comment.finalComment}</p>
      <div className="w-full flex justify-between">
        <p className="text-sm italic">
          {moment(comment.createdAt).format("YYYY-MM-DD")}
        </p>
      </div>
      <button
        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={async () => DeleteComment(whiskey_id, comment._id, removeComment)}
      >
        Delete
      </button>
    </div>
  );
};

export default TastingDetailsPreview;
