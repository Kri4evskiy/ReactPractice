import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import axios from 'axios'

import { Header } from './components'
import { Home, Cart } from './pages'


function App() {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      setPizzas(data.pizzas)
    })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={() => <Home items={pizzas} />} />
        <Route path='/cart' component={Cart} />
        <Redirect to='/' />
      </div>
    </div>
  );
}

export default App;
