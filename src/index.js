import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
//a middleware works with the action that returns function e.g., requestRobots
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; //css class lib
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger(); 
//logger object will be used in middleware as argument

const rootReducers = combineReducers({ searchRobots, requestRobots})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

//Provider component is responsible to pass down the states in store to Apps and its child component. 
//Connect component is to 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
