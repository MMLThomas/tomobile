import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App.jsx';
import rootReducer from './reducers/rootReducer'


const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
      <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
