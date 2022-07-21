import produce from "immer";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PostComment } from "../../axios/Comments";
import { GlobalCommentContext } from "../../hooks/globalComment";
import Rating from "@mui/material/Rating";
import { useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
// import {addComment} from "../../hooks/globalComment"

function AddComment({ setShowModal }) {
  const { addComment } = GlobalCommentContext;
  const { id } = useParams();
  const { user } = useAuthContext();
  console.log("in add comment");
  const [commentState, setCommentState] = useState({
    visual: {
      rating: 0,
      comment: "",
    },
    nose: {
      rating: 0,
      comment: "",
    },
    palate: {
      rating: 0,
      comment: "",
    },
    finish: {
      rating: 0,
      comment: "",
    },
    finalRating: 0,
    finalComment: "",
    whiskey_id: "",
    user_id: "",
  });

  // Updates star values for each rating component
  useEffect(() => {
    const { visual, nose, palate, finish } = commentState;
    const average =
      (visual.rating + nose.rating + palate.rating + finish.rating) / 4;
    setCommentState({
      ...commentState,
      finalRating: average,
    });
  }, [
    commentState.visual.rating,
    commentState.nose.rating,
    commentState.palate.rating,
    commentState.finish.rating,
    commentState.finalRating,
  ]);

  // set whiskey and user id to tasting
  useEffect(() => {
    setCommentState({
      ...commentState,
      whiskey_id: id,
      user_id: user._id,
    });
  }, []);

  // Allows nesting states to be accessed
  const immerVisualComment = (e) => {
    const value = produce(commentState, (draft) => {
      draft.visual.comment = e.target.value;
    });
    setCommentState(value);
  };

  const immerNoseComment = (e) => {
    const value = produce(commentState, (draft) => {
      draft.nose.comment = e.target.value;
    });
    setCommentState(value);
  };

  const immerPalateComment = (e) => {
    const value = produce(commentState, (draft) => {
      draft.palate.comment = e.target.value;
    });
    setCommentState(value);
  };

  const immerFinishComment = (e) => {
    const value = produce(commentState, (draft) => {
      draft.finish.comment = e.target.value;
    });
    setCommentState(value);
  };

  const immerFinalComment = (e) => {
    const value = produce(commentState, (draft) => {
      draft.finalComment = e.target.value;
    });
    setCommentState(value);
  };

  async function submitComment(e) {
    console.log(`state: ${commentState.visual.rating}`);
    e.preventDefault();
    setShowModal(false);
    await PostComment(id, commentState, addComment);
  }

  return (
    <>
      <form className="" onSubmit={submitComment}>
        <div className="my-2">
          <div className="my-1 flex justify-between">
            <label>Visual Rating</label>
            <div>
              <Rating
                value={commentState.visual.rating}
                onChange={(_, value) => {
                  setCommentState({
                    ...commentState,
                    visual: {
                      rating: value,
                      comment: commentState.visual.comment,
                    },
                  });
                }}
              ></Rating>
            </div>
          </div>
          <textarea
            className="block p-4 w-full bg-gray-50 border border-gray-300 rounded-lg"
            cols="50"
            rows="2"
            name="visual.comment"
            value={commentState.visual.comment}
            onChange={immerVisualComment}
          ></textarea>
        </div>

        <div className="my-2">
          <div className="my-2 flex justify-between">
            <label>Nose Rating</label>
            <Rating
              value={commentState.nose.rating}
              onChange={(_, value) => {
                setCommentState({
                  ...commentState,
                  nose: {
                    rating: value,
                    comment: commentState.nose.comment,
                  },
                });
              }}
            ></Rating>
          </div>

          <textarea
            className="block p-4 w-full bg-gray-50 border border-gray-300 rounded-lg"
            cols="50"
            rows="2"
            name="nose.comment"
            value={commentState.nose.comment}
            onChange={immerNoseComment}
          ></textarea>
        </div>

        <div className="my-2">
          <div className="my-2 flex justify-between">
            <label>Palate Rating</label>
            <Rating
              value={commentState.palate.rating}
              onChange={(_, value) => {
                setCommentState({
                  ...commentState,
                  palate: {
                    rating: value,
                    comment: commentState.palate.comment,
                  },
                });
              }}
            ></Rating>
          </div>
          <textarea
            className="block p-4 w-full bg-gray-50 border border-gray-300 rounded-lg"
            cols="20"
            rows="2"
            name="palate.comment"
            value={commentState.palate.comment}
            onChange={immerPalateComment}
          ></textarea>
        </div>

        <div className="my-2">
          <div className="my-2 flex justify-between">
            <label>Finish Rating</label>
            <Rating
              value={commentState.finish.rating}
              onChange={(_, value) => {
                setCommentState({
                  ...commentState,
                  finish: {
                    rating: value,
                    comment: commentState.finish.comment,
                  },
                });
              }}
            ></Rating>
          </div>

          <textarea
            className="block p-4 w-full bg-gray-50 border border-gray-300 rounded-lg"
            cols="50"
            rows="2"
            name="finish.comment"
            value={commentState.finish.comment}
            onChange={immerFinishComment}
          ></textarea>
        </div>

        <div>
          <label>Final comment</label>
          <br></br>
          <textarea
            className="block p-4 w-full bg-gray-50 border border-gray-300 rounded-lg"
            cols="50"
            rows="2"
            name="finalComment"
            value={commentState.finalComment}
            onChange={immerFinalComment}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
          <button className="mt-3 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Submit tasting
          </button>
        </div>
      </form>
    </>
  );
}

export default AddComment;
