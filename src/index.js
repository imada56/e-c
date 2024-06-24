import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Context } from './component/Context';
import Store from './Redux/Store/Store';
import { Provider } from 'react-redux';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <Context>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Context>
  </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

