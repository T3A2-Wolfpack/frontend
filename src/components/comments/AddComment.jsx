import React, { useContext, useReducer } from "react";
import formReducer from "../../hooks/formReducer";
import { GlobalCommentContext } from "../../hooks/globalComment";


const initialFormState = {
  whiskey: "",
  user: "",
  id: "",
  visual_rating: "",
  visual_comment: "",
  // nose_rating: "",
  // nose_comment: "",
  // palate_rating: "",
  // palate_comment: "",
  // final_rating: "",
  // final_comment: "",
};

function AddComment() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const { addComment, comments } = useContext(GlobalCommentContext)

  const handleTextInput = (e) => {
    dispatch({
      type: "TEXT_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  function submitComment(e) {
    e.preventDefault();
    formState.id = comments.length
    // console.log(formState)
    addComment(formState);
  }

  return (
    <>
      <div>AddComment</div>
      <form onSubmit={submitComment}>
        <div>
          <label>Whiskey:</label>
          <textarea
            cols="20"
            rows="1"
            name="whiskey"
            value={formState.whiskey}
            onChange={(e) => handleTextInput(e)}
          ></textarea>
        </div>
        <div>
          <label>visual rating out of 5</label>
          <textarea
            cols="20"
            rows="1"
            name="visual_rating"
            value={formState.visual_rating}
            onChange={(e) => handleTextInput(e)}
          ></textarea>
        </div>
        <div>
          <label>visual comment</label>
          <textarea
            cols="20"
            rows="1"
            name="visual_comment"
            value={formState.visual_comment}
            onChange={(e) => handleTextInput(e)}
          ></textarea>
        </div>
        <button>Submit comment</button>
      </form>
    </>
  );
}

export default AddComment;
