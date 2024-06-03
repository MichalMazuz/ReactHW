import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore}from 'redux';
import { Provider } from 'react-redux';
import SongReducer from './component/lesson8/store/reducers/SongReducer';
import PostReducer from './component/lesson9/store/reducers/PostReducer';
import MessageReducer from './component/lesson9/store/reducers/MessageReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
let x=createStore(combineReducers({post:PostReducer,mes:MessageReducer}) )
root.render(
  // <React.StrictMode>
  <Provider store={x}>
    <App />
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
