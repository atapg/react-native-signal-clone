export const initialState = {
    user: {
        username: "Ata Parvin Ghods",
    },
    currentChatUser: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_CURRENT_CHAT":
            return {
                ...state,
                currentChatUser: action.item,
            }
        default:
            return state
    }
}

export default reducer
