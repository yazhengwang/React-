// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import getRouter from './router/router';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './redux/store'

ReactDOM.render(getRouter(), document.getElementById('root'));
registerServiceWorker();
