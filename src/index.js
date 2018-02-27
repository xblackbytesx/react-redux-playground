import React from 'react';
import ReactDOM from 'react-dom';

// Adding Redux to the mix
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create store with initial state
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
