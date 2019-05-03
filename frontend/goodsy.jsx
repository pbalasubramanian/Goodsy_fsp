import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    //ReactDOM.render(<h1>Welcome to Goodsy!</h1>, root);
    const store = configureStore();

    // JUST FOR TESTING...remove later!
    window.getState = store.getState;
    window.dispatch = store.dispatch; 

    ReactDOM.render(<Root store={store}/>, root);
})