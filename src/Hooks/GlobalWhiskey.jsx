import React, { createContext, useReducer } from "react";
import whiskeyReducer from "./whiskeyReducer";

// The initial state may change to cover API call to all whiskeys.
const initialState = {
  whiskeys: [],
};

export const GlobalWhiskeyContext = createContext(initialState);

export const GlobalWhiskeyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(whiskeyReducer, initialState);

  function addWhiskey(whiskey) {
    dispatch({
      type: "ADD_WHISKEY",
      data: whiskey,
    });
  }

  function removeWhiskey(id) {
    dispatch({
      type: "REMOVE_WHISKEY",
      data: id,
    });
  }

  function editWhiskey(whiskey) {
    dispatch({
      type: "EDIT_WHISKEY",
      data: whiskey,
    });
  }

  function showWhiskeys(whiskeys) {
    dispatch({
      type: "SHOW_WHISKEY",
      data: whiskeys,
    });
  }

  return (
    <GlobalWhiskeyContext.Provider
      value={{
        whiskeys: state.whiskeys,
        addWhiskey,
        removeWhiskey,
        editWhiskey,
        showWhiskeys,
      }}
    >
      {children}
    </GlobalWhiskeyContext.Provider>
  );
};
