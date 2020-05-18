import { createStore, combineReducers } from 'redux'


const reducers = combineReducers({
    numbers: function(state, action) {
        switch (action.type) {
            case 'NUM_MIN_ALTERED':
                return {
                    ...state,
                    min: action.payload
                }
            default:
                return {
                    min: 7,
                    max: 31
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