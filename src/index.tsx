import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App.tsx';
import { Context } from './component/Context';
//import Store from './Redux/Store/Store.tsx';
import { Provider } from 'react-redux';
import Expl from './App';
import Store from './Redux/Store/Store';
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Provider store={Store}>
    <Context>
    <React.StrictMode>
      <Expl />
    </React.StrictMode>
    </Context>
    </Provider>
  );
} else {
  console.error('Failed to find the root element');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
