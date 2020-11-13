import { combineReducers } from 'redux'

import filtersReducers from './filtersReducer'
import pizzasReducers from './pizzasReducer'

const rootReducer = combineReducers({
    filters: filtersReducers,
    pizzas: pizzasReducers
})

export default rootReducer