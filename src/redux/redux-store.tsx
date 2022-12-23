import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from './authReducer';



const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth:authReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
export const  store = createStore(rootReducer)
// @ts-ignore
window.store = store