import { NUM_MIN_ALTERED, NUM_MAX_ALTERED } from './actionsTypes'

//Action creator
export const alterNumberMin = newNumber => {
    return {
        type: NUM_MIN_ALTERED,
        payload: newNumber
    }
}

export const alterNumberMax = newNumber => {
    return {
        type: NUM_MAX_ALTERED,
        payload: newNumber
    }
}