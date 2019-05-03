import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    //ReactDOM.render(<h1>Welcome to Goodsy!</h1>, root);
    let store;

    if ( window.currentUser ) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // JUST FOR TESTING...remove later!
    window.getState = store.getState;
    window.dispatch = store.dispatch; 

    ReactDOM.render(<Root store={store}/>, root);
})