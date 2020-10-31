import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import rootReducer from './reducers'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)

ReactDOM.render(
  <BrowserRouter>
<Provider store={store}><App /></Provider>
</BrowserRouter>
,
 document.getElementById('root'));


