import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

import { Header } from './components'
import { Home, Cart } from './pages'

import { setPizzas as setPizzasAction } from './redux/actions/actionPizzas'


function App(props) {

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      props.setPizzas(data.pizzas)
    })
    console.log(props, "Третий лог")
  }, [])
  console.log(props, "Второй лог");


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={() => <Home items={props.items} />} />
        <Route path='/cart' component={Cart} />
        <Redirect to='/' />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state, 'Первый лог')
  return {
    items: state.pizzas.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (data) => dispatch(setPizzasAction(data)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
