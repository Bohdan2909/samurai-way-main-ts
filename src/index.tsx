import React from 'react';
import store, {StateType, StoreType} from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider, StoreContext} from './redux/store-context';


export let rerenderApp = (state:StateType) =>{
    ReactDOM.render(
        <BrowserRouter>
           <Provider store={store}>
               <App/>
           </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderApp(store.getState())

store.subscribe(()=>{
     let state = store.getState()
    rerenderApp(state)
})