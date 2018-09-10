import React from 'react';
import { render } from 'react-dom'; // reactDom renderiza componentes y elementos de react
//import Categories from './src/playlist/components/categories'
import Home from '../pages/containers/home';
// import data from '../api.json';
import data from '../schemas/index.js'
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';

// console.log(data);


const store = createStore(
  reducer,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//console.log(store.getState());

const homeContainer = document.getElementById('home-container');


render(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
 );
