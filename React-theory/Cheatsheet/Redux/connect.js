import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

const Component1 = () => {
    <div className="component1">
        <Component2 />
    </div>
}
const Component2 = () => {
    <div className="component2">
        <Component2 />
    </div>
}
const Component3 = () => {
    <div className="component3">
        <Component3 />
    </div>
}
// const Component4 = () => {
//     state = { count: 0 }

//     inc = () => this.setState(({ count }) => ({ count: count + 1 }))
//     dec = () => this.setState(({ count }) => ({ count: count - 1 }))

//     render() {
//         return (
//             <div className="component4">
//                 <button className='component4__btn' onClick={this.dec}> - </button>
//                 <div className='component4__count'>{this.state.count}</div>
//                 <button className='component4__btn' onClick={this.inc}> + </button>
//             </div>
//         )
//     }
// }

const Component4 = ({ dec, inc, count }) => (
    <div className="component4">
        <button className='component4__btn' onClick={dec}> - </button>
        <div className='component4__count'>{count}</div>
        <button className='component4__btn' onClick={inc}> + </button>
    </div>
)

const INC = 'INC' // actionTypes.js
const DEC = 'DEC' // actionTypes.js

const inc = () => ({ type: INC }) //actions.js
const dec = () => ({ type: DEC }) //actions.js

const reducer = (state = { count: 0 }, action) => {  // ----------- reducer.js (может входить в rootReducer)
    switch (action.type) {
        case INC:
            return { count: state.count + 1 }
        case DEC:
            return { count: state.count - 1 }
        default: state
    }
}

const store = createStore(reducer)

const setStateToProps = (state) => ({ count: state.count })

const setDispatchToProps = (dispatch) => ({
    inc: () => dispatch(inc()),
    dec: () => dispatch(dec())
})
const NewComponent = connect(setStateToProps, setDispatchToProps)(Component4)

ReactDOM.render(
    <Provider store={store}>
        <Component1 />
    </Provider>,
    document.getElementById('root'))
