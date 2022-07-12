import { createContext, useReducer } from "react"
import commentReducer from "./commentReducer"

const initialState = {
    comments: []
}

export const GlobalCommentContext = createContext(initialState)

export const GlobalCommentProvider = ({ children }) => {
    const [state, dispatch] = useReducer(commentReducer, initialState)

    function addComment(comment) {
        dispatch({
            type: "ADD_COMMENT",
            payload: comment,
        })
    }


    return (
        <GlobalCommentContext.Provider
            value={{
                comments: state.comments,
                addComment
            }}>
                {children}
        </GlobalCommentContext.Provider>
    )
}