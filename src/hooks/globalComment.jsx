import { createContext, useReducer } from "react";
import commentReducer from "./commentReducer";

const initialState = {
  comments: [],
};

export const GlobalCommentContext = createContext(initialState);

export const GlobalCommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentReducer, initialState);

  function addComment(comment) {
    dispatch({
      type: "ADD_COMMENT",
      data: comment,
    });
  }
  // Need a show all comments page
  function removeComment(id) {
    dispatch({
      type: "REMOVE_COMMENT",
      data: id,
    });
  }

  function showComments(comments) {
    dispatch({
      type: "SHOW_COMMENT",
      data: comments,
    });
  }
  console.log("in comment provider")
  return (
    <GlobalCommentContext.Provider
      value={{
        comments: state.comments,
        addComment,
        removeComment,
        showComments,
      }}
    >
      {children}
    </GlobalCommentContext.Provider>
  );
};
