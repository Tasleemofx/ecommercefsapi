import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import App from './App';
import { BrowserRouter } from "react-router-dom" 
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(

      <Provider store = {store}>
        <BrowserRouter>
        
          <App/>     
            
        </BrowserRouter>
      </Provider>,
  document.getElementById('root')
);

