import produce from "immer";
import React, { useContext, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { PostComment } from "../../axios/Comments";
import { GlobalCommentContext } from "../../hooks/globalComment";
import { GlobalWhiskeyContext } from "../../hooks/GlobalWhiskey";

function AddComment() {
  const { id } = useParams();

  const [commentState, setCommentState] = useState({
    whiskey: "",
    user: "",
    visual: {
      rating: "",
      comment: "",
    },
    nose: {
      rating: "",
      comment: "",
    },
    // palate: {
    //   rating: "",
    //   comment: "",
    // },
    // finish: {
    //   rating: "",
    //   comment: ""
    // },
    // final_comment: ""
  });

  const { addComment, comments } = useContext(GlobalCommentContext);
  const { whiskeys } = useContext(GlobalWhiskeyContext);

  // const handleOnChange = (e) => {
  //   const value = e.target.name;
  //   setCommentState({
  //     ...state,
  //     [e.target.name]: value,
  //   });
  // };

  // const immerChange = (e) => {
  //   const value = produce(commentState, draft => {
  //     draft[e.target.name] = e.target.value
  //   });
  //   setCommentState(value);
  // };

  //////////////

  const immerVisualRating = (e) => {
    const value = produce(commentState, (draft) => {
      draft.visual.rating = e.target.value;
    });
    setCommentState(value);
  };

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

  const findWhiskey = () => {
    setCommentState({ ...commentState, whiskey: id });
  };

  ///////////////

  function submitComment(e) {
    e.preventDefault();
    findWhiskey();

    PostComment(id, commentState)
  }


  return (
    <>
      <div>AddComment</div>
      <form onSubmit={submitComment}>
        <div>
          <label>visual rating out of 5</label>
          <textarea
            cols="20"
            rows="1"
            name="visual.rating"
            value={commentState.visual.rating}
            onChange={immerVisualRating}
          ></textarea>
        </div>
        <div>
          <label>visual comment</label>
          <textarea
            cols="20"
            rows="1"
            name="visual_comment"
            value={commentState.visual.comment}
            onChange={immerVisualComment}
          ></textarea>
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
        <button>Submit comment</button>
      </form>
    </>
  );
}

export default AddComment;
