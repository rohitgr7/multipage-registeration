import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store';
import App from './containers';

const store = configureStore();

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
