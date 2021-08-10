import React from 'react';
import ReactDOM from 'react-dom';
import {GitExpertApp} from './GifExpertApp';
import './index.css';


ReactDOM.render(
  // <React.StrictMode>                // React lo pone por defecto para ser mas estricto. 
    <GitExpertApp />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
