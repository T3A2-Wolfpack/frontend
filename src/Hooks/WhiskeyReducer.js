export default function whiskeyReducer(state, action) {
  switch (action.type) {
    case "ADD_WHISKEY":
      return {
        ...state,
        whiskeys: [...state.whiskeys, action.payload],
      };
    default:
      return whiskey;
  }
}
