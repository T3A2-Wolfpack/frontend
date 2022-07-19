import produce from "immer";
import React, { useContext, useReducer, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { PostComment } from "../../axios/Comments";
import { GlobalCommentContext } from "../../hooks/globalComment";
import { GlobalWhiskeyContext } from "../../hooks/GlobalWhiskey";
import StarRating from "../StartRating";
import { useAuth0 } from "@auth0/auth0-react";

import StarRating from "../StarRating";

function AddComment() {
  const { id } = useParams();
  const [starValue, setStarValue] = useState(0);
  const { user } = useAuth0();

  const [commentState, setCommentState] = useState({
    visual: {
      rating: "",
      comment: "",
    },
    nose: {
      rating: "",
      comment: "",
    },
    palate: {
      rating: "",
      comment: "",
    },
    finish: {
      rating: "",
      comment: "",
    },
    finalComment: "",
    whiskey_id: "",
    user_id: "",
  });

  const { addComment, comments } = useContext(GlobalCommentContext);
  const { whiskeys } = useContext(GlobalWhiskeyContext);

  const immerVisualRating = (e) => {
    const value = produce(commentState, (draft) => {
      draft.visual.rating = "starValue";
    });
    setCommentState(value);
  };
  // const immerVisualRating = () => {
  //   const value = produce(commentState, (draft) => {
  //     draft.visual.rating = StarRating.rating
  //   });
  //   setCommentState(value);
  // };

  const immerVisualComment = (e) => {
    const value = produce(commentState, (draft) => {
      draft.visual.comment = e.target.value;
    });
    setCommentState(value);
  };

  const immerNoseRating = (e) => {
    const value = produce(commentState, (draft) => {
      draft.nose.rating = e.target.value;
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

  const immerPalateRating = (e) => {
    const value = produce(commentState, (draft) => {
      draft.palate.rating = e.target.value;
    });
    setCommentState(value);
  };

  const immerFinishRating = (e) => {
    const value = produce(commentState, (draft) => {
      draft.finish.rating = e.target.value;
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

  const findWhiskey = () => {
    console.log(id);
    console.log(user);
    immerVisualRating();
    setCommentState({ ...commentState, whiskey_id: id, user_id: user._id });
  };

  /////////////////////////////////////////////






  const immerVisualRating = () => {
    const value = produce(commentState, (draft) => {
      draft.visual.rating = StarRating.rating;
    });
    setCommentState(value);
  };





  
  /////////////////////////////////////////////

  function submitComment(e) {
    e.preventDefault();
    findWhiskey();

    console.log(commentState);
    PostComment(id, commentState);
    // console.log(commentState)
    // PostComment(id, commentState);
    console.log(StarRating.ratingValue);
  }

  return (
    <>
      <form onSubmit={submitComment}>
        <div>
          <label>Visual rating out of 5</label>
          <StarRating
            starValue={starValue}
            setStarValue={setStarValue}
          ></StarRating>
          {console.log(starValue)}
          <input
            name="visual.rating"
            value={starValue}
            onChange={immerVisualRating}
            type="hidden"
          ></input>
        </div>
        <div>
          <label>visual comment</label>
          <input
            class="block p-4 w-full bg-gray-50 border border-gray-300 rounded-lg"
            cols="20"
            rows="3"
            name="visual.comment"
            value={commentState.visual.comment}
            onChange={immerVisualComment}
          ></input>
        </div>
        <div>
          <label>Scent rating out of 5</label>
          <textarea
            cols="20"
            rows="1"
            name="nose.rating"
            value={commentState.nose.rating}
            onChange={immerNoseRating}
          ></textarea>
        </div>
        <div>
          <label>Scent comment</label>
          <textarea
            cols="20"
            rows="1"
            name="nose.comment"
            value={commentState.nose.comment}
            onChange={immerNoseComment}
          ></textarea>
        </div>
        <div>
          <label>Palate rating</label>
          <textarea
            cols="20"
            rows="1"
            name="palate.rating"
            value={commentState.palate.rating}
            onChange={immerPalateRating}
          ></textarea>
        </div>
        <div>
          <label>Palate comment</label>
          <textarea
            cols="20"
            rows="1"
            name="palate.comment"
            value={commentState.palate.comment}
            onChange={immerPalateComment}
          ></textarea>
        </div>
        <div>
          <label>Finish rating</label>
          <textarea
            cols="20"
            rows="1"
            name="finish.rating"
            value={commentState.finish.rating}
            onChange={immerFinishRating}
          ></textarea>
        </div>
        <div>
          <label>Finish comment</label>
          <textarea
            cols="20"
            rows="1"
            name="finish.comment"
            value={commentState.finish.comment}
            onChange={immerFinishComment}
          ></textarea>
        </div>
        <div>
          <label>Final comment</label>
          <textarea
            cols="20"
            rows="1"
            name="finalComment"
            value={commentState.finalComment}
            onChange={immerFinalComment}
          ></textarea>
        </div>
        <button>Submit comment</button>
      </form>
    </>
  );
}

export default AddComment;
