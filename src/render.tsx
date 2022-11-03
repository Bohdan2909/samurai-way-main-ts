import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost, StateType} from './redux/state'



export let rerenderApp = (state: StateType) =>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}