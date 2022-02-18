import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Layout';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom'

sessionStorage.clear();

ReactDOM.render(
  <React.StrictMode>
    {
      navigator.appVersion.split(' ')[0] == '5.0'
      ? (
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      )
      : <div style={{color:'red',fontSize:'16px',fontWeight:600,width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>Html version is not 5.0</div>
    }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
