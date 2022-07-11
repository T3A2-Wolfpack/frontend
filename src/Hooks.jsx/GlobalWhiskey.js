import React from 'react'
import whiskeyReducer from './WhiskeyReducer'

function GlobalWhiskey() {
  return (

  )
}

// The initial state may change to cover API call to all whiskeys.
const initialState = {
    whiskeys: [
        {
            name: "",
            age: "",
            region: "",
            type: "",
            budget: ""
        }
    ]
}

export const GlobalWhiskeyContext = createContext(initialState)

export const GlobalWhiskeyProvider = ({ children }) => {
    const [state, dispatch] = useReducer(whiskeyReducer, initialState)

    function addWhiskey(whiskey) {
        dispatch({
            type: "ADD_WHISKEY",
            payload: whiskey
        })
    }


    return (
        <GlobalWhiskeyContext.Provider value={{
            whiskeys: state.whiskeys,
            addWhiskey
        }}>
            {children}
        </GlobalWhiskeyContext.Provider>
    )
}

