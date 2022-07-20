export default function commentReducer(state, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.data],
      };
    case "REMOVE_COMMENT":
      return {
        comments: state.comments.filter(
          (comment) => comment._id !== action.data
        ),
      };
    case "SHOW_COMMENT":
      return {
        ...state,
        comments: [...action.data],
      };
    default:
      return state;
  }
}
