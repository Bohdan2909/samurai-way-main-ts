import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';



const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
})

let store = createStore(reducers)