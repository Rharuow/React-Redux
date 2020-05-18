import { createStore, combineReducers } from 'redux'
import numbersReducer from './reducers/numbersReducer'

const reducers = combineReducers({
    numbers: numbersReducer,
})

export default function storeConfig() {
    return createStore(reducers)
}