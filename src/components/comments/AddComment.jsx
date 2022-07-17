import React, { useContext, useReducer, useState } from "react";
import formReducer from "../../hooks/formReducer";
import { GlobalCommentContext } from "../../hooks/globalComment";
import { GlobalWhiskeyContext } from "../../hooks/GlobalWhiskey";




function AddComment() {
  const { whiskeys } = useContext(GlobalWhiskeyContext)

  const [state, setState] = useState({
    whiskey: "",
    user: "",
    visual: {
          rating: "",
          comment: ""
        },
    nose: {
      rating: "",
      comment: ""
    },
    palate: {
      rating: "",
      comment: ""
    },
    // finish: {
    //   rating: "",
    //   comment: ""
    // },
    // final_comment: ""
  });

  const { addComment, comments } = useContext(GlobalCommentContext)

  const handleOnChange = (e) => {
    const value = e.target.name
    setState({
      ...state,
      [e.target.name]: value
    })
  }


  function submitComment(e) {
    e.preventDefault();
    // console.log(formState)
    console.log(state)
    console.log(comments)
    // addComment(formState);
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
            value={state.visual.rating}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div>
          <label>visual comment</label>
          <textarea
            cols="20"
            rows="1"
            name="visual_comment"
            value={state.visual.comment}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div>
          <label>Scent rating out of 5</label>
          <textarea
            cols="20"
            rows="1"
            name="visual_comment"
            value={state.nose.rating}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div>
          <label>Scent comment</label>
          <textarea
            cols="20"
            rows="1"
            name="visual_comment"
            value={state.nose.comment}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button>Submit comment</button>
      </form>
    </>
  );
}

export default AddComment;
