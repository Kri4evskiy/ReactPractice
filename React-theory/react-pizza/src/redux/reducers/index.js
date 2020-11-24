import { combineReducers } from 'redux'

import filtersReducers from './filtersReducer'
import pizzasReducers from './pizzasReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    filters: filtersReducers,
    pizzas: pizzasReducers,
    cart: cartReducer
})

export default rootReducer