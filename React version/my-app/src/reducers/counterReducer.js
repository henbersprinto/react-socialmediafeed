export const counterReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ONE": return {...state, storedNumber: (state.storedNumber + 1)};
        case "SUB_ONE": return {...state, storedNumber: (state.storedNumber - 1)};
        case "ADD_PAYLOAD": return {...state, storedNumber: (state.storedNumber + action.payload)}
        default: return state;
    }
}