export function createStore(rootReducer, initialState) {
    let state = rootReducer(initialState, { type: '__INIT__' })
    const subscreibers = []

    return {
        dispatch(action) {
            state = rootReducer(state, action)
            subscreibers.forEach(sub => sub())
        },
        subscribe(callback) {
            subscreibers.push(callback)
        },
        getState() {
            return state
        }
    }
}