export default function whiskeyReducer(state, action) {
  switch (action.type) {
    case "ADD_WHISKEY":
      return {
        ...state,
        whiskeys: [...state.whiskeys, action.data],
      };
    case "REMOVE_WHISKEY":
      return {
        ...state,
        whiskeys: state.whiskeys.filter(
          (whiskey) => whiskey.id !== action.data
        ),
      };
    case "EDIT_WHISKEY":
      const updatedWhiskey = action.data;
      const updatedWhiskeys = state.whiskeys.map((whiskey) => {
        if (whiskey.id === updatedWhiskey.id) {
          return updatedWhiskey;
        }
        return whiskey;
      });
      return {
        ...state,
        whiskeys: updatedWhiskeys,
      };
    case "SHOW_WHISKEY":
      return {
        ...state,
        whiskeys: action.data,
      };
    default:
      return whiskey;
  }
}
