import axios from 'axios'

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
})

export const fetchPizzas = () => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get('http://localhost:3001/db.json').then(({ data }) => {
        dispatch(setPizzas(data.pizzas))
    })
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})
