import React from 'react';
import store, {StateType, StoreType} from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


export let rerenderApp = (state:StateType) =>{
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                 // addPost={store.addPost}
                 // updateNewPostText={store.updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
let state = store.getState()

rerenderApp(state)

store.subscribe(rerenderApp)