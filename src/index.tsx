import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginStore from './core/store/LoginStore';

// create initialStore
const loginStore = new LoginStore();


ReactDOM.render(
  <div> 
    <App loginStore={loginStore} />
  </div>,
  document.getElementById('root')
);
