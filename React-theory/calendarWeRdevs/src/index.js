import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './App'

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(
  application,
  document.getElementById('root')
)