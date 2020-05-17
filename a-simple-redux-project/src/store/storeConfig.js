import { createStore, combineReducers } from 'redux'


const reducers = combineReducers({
    numbers: function(state, action) {
        console.log(state, " ", action)
        return {
            min: 7,
            max: 31
        }
    },
    names: function(state, action) {
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