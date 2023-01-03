import {Dispatch} from 'redux';
import {API} from '../api/api';

export type ActionsAuthType = setUserDataTypeAC
export type setUserDataTypeAC = ReturnType<typeof setUserDataAC>
export type initialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean

}
const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: initialStateType = initialState, action: ActionsAuthType): initialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}

        default:
            return state
    }
}

export const setUserDataAC = (userId: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {userId, email, login}
    } as const
}
//Thunks
export const  getUserDataTC = () => (dispatch:Dispatch) =>
    API.authMe()
    .then(res => {
        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data
            dispatch(setUserDataAC(id, email, login))
        }
    })