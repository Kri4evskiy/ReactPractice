const initialState = {
    categories: null,
    sortBy: 'popular'
}

const filtersReducer = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload
        }
    }
    if (action.type === 'SET_CATEGORIES') {
        return {
            ...state,
            categories: action.payload
        }
    }
    return state
}

export default filtersReducer