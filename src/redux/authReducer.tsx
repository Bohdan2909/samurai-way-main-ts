export type ActionsType = setUserDataTypeAC
export type setUserDataTypeAC = ReturnType<typeof setUserDataAC>
export type initialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth:boolean

}
const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
}

export const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth:true}

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
