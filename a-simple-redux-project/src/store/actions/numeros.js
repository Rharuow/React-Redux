//Action creator

export function alterNumberMin(newNumber) {
    return {
        type: 'NUM_MIN_ALTERED',
        payload: newNumber
    }
}