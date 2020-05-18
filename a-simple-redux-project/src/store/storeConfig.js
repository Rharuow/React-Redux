import { createStore, combineReducers } from 'redux'


const reducers = combineReducers({
    numbers: function(state, action) {
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
                return {
                    min: 1,
                    max: 2
                }
        }
    },
    names: function(state, action) {
        console.log("Reducer de Nome foi chamado")
        console.log(state, " ", action)
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

export default function storeConfig() {
    return createStore(reducers)
}