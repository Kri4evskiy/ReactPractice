const initialState = {
  categories: null,
  sortBy: {
    type: 'popular',
    order: 'desc'
  }
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload
      }
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state
  }

}

export default filtersReducer