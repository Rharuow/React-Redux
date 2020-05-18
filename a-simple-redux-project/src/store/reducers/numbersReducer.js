const initialState = {
    min: 1,
    max: 2
}


export default (state = initialState, action) => {
    switch (action.type) {
        case 'NUM_MIN_ALTERED':
            return {
                ...state,
                min: action.payload,
                max: state.max <= action.payload ? action.payload + 1 : state.max 
            }
        case 'NUM_MAX_ALTERED':
            return {
                ...state,
                max: action.payload,
                min: state.min >= action.payload ? action.payload - 1 : state.min 
            }
        default:
            return state
    }
}