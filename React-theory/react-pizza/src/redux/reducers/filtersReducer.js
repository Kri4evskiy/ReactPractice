const initialState = {
    categories: null,
    sortBy: {
        type: 'popular',
        order: 'desc'
    }
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