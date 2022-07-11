export default function whiskeyReducer(state, action) {
  switch (action.type) {
    case "ADD_WHISKEY":
      return {
        ...state,
        whiskeys: [...state.whiskeys, action.payload],
      }
    case "REMOVE_WHISKEY":
      return {
        ...state,
        whiskeys: state.whiskeys.filter((whiskey) => whiskey.id !== action.payload )
      }
    
    // Below isnt finished
    // case "EDIT_WHISKEY":
    //   const updatedWhiskey = action.payload

    //   const updatedWhiskeys = state.whiskeys.map((whiskey) => {
    //     if (whiskey.id === updatedWhiskey.id) {
    //       return updatedWhiskey
    //     }
    //     return whiskey
    //   })
    default:
      return whiskey;
  }
}
