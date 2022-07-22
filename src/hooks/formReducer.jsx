
export default function formReducer(state, action) {
    switch(action.type) {
        case "TEXT_INPUT": 
            return {
                ...state,
                [action.field]: action.payload
            }
        default:
            return state
    }
}
