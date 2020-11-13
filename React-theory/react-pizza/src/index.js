import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import store from './redux/store'
import { Provider } from 'react-redux'

import App from './App';
import reportWebVitals from './reportWebVitals';

import './scss/app.scss'

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>

    </BrowserRouter>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'));
reportWebVitals();
