import React from 'react'

import { Redirect, Route } from 'react-router-dom'


import { Header } from './components'
import { Home, Cart } from './pages'



function App() {

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
