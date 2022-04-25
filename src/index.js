import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Portfolio} from "./Portfolio";
import { Provider } from 'react-redux'
import { store } from './redux/store'
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <Portfolio />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();