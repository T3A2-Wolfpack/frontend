export default function commentReducer(state, action) {
    switch (action.type) {
        case "ADD_COMMENT":
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        case "REMOVE_COMMENT":
            return {
                ...state,
                comments: state.comments.filter((comment) => comment.id !== action.payload)
            }
        default:
            return state
    }
}
