import produce from "immer";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PostComment } from "../../axios/Comments";
import { GlobalCommentContext } from "../../hooks/globalComment";
import { useAuth0 } from "@auth0/auth0-react";
import Rating from "@mui/material/Rating";
import { useEffect } from "react";

function AddComment({ setShowModal, starValues, setStarValues }) {
  const { id } = useParams();
  const { user } = useAuth0();

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

  useEffect(() => {
    console.log(starValues.visual)
    setStarValues({ ...starValues, visual: starValues.visual });
    setCommentState({
      ...commentState,
      visual: {
        rating: starValues.visual,
        comment: commentState.visual.comment,
      },
    });
    console.log(commentState)
  }, [starValues.visual]);

  useEffect(() => {
    setStarValues({ ...starValues, nose: starValues.nose });
    setCommentState({
      ...commentState,
      nose: {
        rating: starValues.nose,
        comment: commentState.nose.comment,
      },
    });
  }, [starValues.nose]);

  useEffect(() => {
    setStarValues({ ...starValues, palate: starValues.palate });
    setCommentState({
      ...commentState,
      palate: {
        rating: starValues.palate,
        comment: commentState.palate.comment,
      },
    });
  }, [starValues.palate]);

  // useEffect(() => {
  //   setStarValues({ ...starValues, finish: starValues.finish });
  //   setCommentState({
  //     ...commentState,
  //     finish: {
  //       rating: starValues.finish,
  //       comment: commentState.finish.comment,
  //     },
  //   });
  // }, [starValues.finish]);

  // useEffect(() => {
  //   console.log(commentState);
  //   const { visual, nose, palate, finish } = starValues;
  //   const average = (visual + nose + palate + finish) / 4;
  //   setStarValues({ ...starValues, average });
  //   setCommentState({
  //     ...commentState,
  //     finalRating: average,
  //   });
  // }, [
  //   starValues.visual,
  //   starValues.nose,
  //   starValues.palate,
  //   starValues.finish,
  //   starValues.average,
  // ]);

  useEffect(() => {
    console.log("YOOOOOOOOOOOOOO");
    setCommentState({
      ...commentState,
      whiskey_id: id,
      user_id: user._id,
    });
  }, []);

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

  const { addComment } = useContext(GlobalCommentContext);

  async function submitComment(e) {
    e.preventDefault();
    setShowModal(false);
    console.log(commentState);
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
                value={starValues.visual}
                onChange={(_, value) => {
                  setStarValues({ ...starValues, visual: value });
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
              value={starValues.nose}
              onChange={(_, value) => {
                setStarValues({ ...starValues, nose: value });
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
              value={starValues.palate}
              onChange={(_, value) => {
                setStarValues({ ...starValues, palate: value });
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
              value={starValues.finish}
              onChange={(_, value) => {
                setStarValues({ ...starValues, finish: value });
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
