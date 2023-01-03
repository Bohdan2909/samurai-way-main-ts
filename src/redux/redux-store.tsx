import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {ActionsProfileType} from './profileReducer';
import dialogReducer, {ActionsDialogType} from './dialogReducer';
import {ActionsUserType, usersReducer} from './usersReducer';
import {ActionsAuthType, authReducer} from './authReducer';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'



const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form: formReducer
})
export type AppActionsType=ActionsUserType|ActionsProfileType|ActionsDialogType|ActionsAuthType
type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>
export const  store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store