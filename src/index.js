import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from 'react-redux';
// making store 
const initialState = {
  name:"Patel",
  age:20,
  status:"leetcoder"
}

const store = configureStore({
  reducer:(state)=>{
     return state
  },
  preloadedState:initialState,
})

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
       <App />
     </Provider>
  </React.StrictMode>
);

 
