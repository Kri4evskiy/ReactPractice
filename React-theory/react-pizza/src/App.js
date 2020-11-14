import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Redirect, Route } from 'react-router-dom'
import axios from 'axios'

import { Header } from './components'
import { Home, Cart } from './pages'

import { setPizzas } from './redux/actions/actionPizzas'


function App() {

  const dispatch = useDispatch()  

  useEffect(() => {
    axios.get('http://localhost:3001/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas))
    })
  }, [dispatch])
  return (
    
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
        <Redirect to='/' />
      </div>
    </div>
  );
}

export default App

// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setPizzas: (data) => dispatch(setPizzas(data)),
//     dispatch
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
