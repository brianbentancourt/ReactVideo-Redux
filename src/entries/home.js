import React from 'react';
import { render } from 'react-dom'; // reactDom renderiza componentes y elementos de react
//import Categories from './src/playlist/components/categories'
import Home from '../pages/containers/home';
import data from '../api.json';

const homeContainer = document.getElementById('home-container');

// ReactDOM.render(que voy a renderizar, donde lo haré)
// al renderizar, react sabe que contiene < /> y por eso sabe que es un componente, por ejemplo ReactDOM.render(<Media />,app);

render(<Home data={data} />, homeContainer);


