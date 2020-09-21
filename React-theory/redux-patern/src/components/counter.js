import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className='jumbotron'>
            <h1>{counter}</h1>
            <button onClick={dec} className='btn btn-primary'>DEC</button>
            <button onClick={inc} className='btn btn-secondary'>INC</button>
            <button onClick={rnd} className='btn btn-warning'>RND</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter)