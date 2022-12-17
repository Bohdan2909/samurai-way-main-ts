import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import {usersReducer} from './usersReducer';



const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
export const  store = createStore(rootReducer)
// @ts-ignore
window.store = store