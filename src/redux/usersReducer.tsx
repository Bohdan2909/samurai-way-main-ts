import { Dispatch} from 'redux';
import {API} from '../api/api';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppActionsType, AppStateType} from './redux-store';
export type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    followed: boolean
    name: string
    location: LocationType
    photos: any
    status: string
    uniqueUrlName: string
}
export type FollowTypeAC = ReturnType<typeof followAC>
export type UnFollowTypeAC = ReturnType<typeof unFollowAC>
export type SetUsersTypeAC = ReturnType<typeof setUsersAC>
export type SetCurrentPageTypeAC = ReturnType<typeof setCurrentPageAC>
export type SetUsersTotalCountTypeAC = ReturnType<typeof setUsersTotalCountAC>
export type SetToggleFetchingTypeAC = ReturnType<typeof setToggleFetchingAC>
export type SetToggleFollowingTypeAC = ReturnType<typeof setToggleFollowingAC>

export type ActionsUserType = FollowTypeAC |
    UnFollowTypeAC |
    SetUsersTypeAC |
    SetCurrentPageTypeAC |
    SetUsersTotalCountTypeAC
    | SetToggleFetchingTypeAC
    | SetToggleFollowingTypeAC

export type initialStateType = {
    users: UsersType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}
const initialState = {
    users: [],
    totalCount: 20,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
}

export const usersReducer = (state: initialStateType = initialState, action: ActionsUserType): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}

        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}

        case 'SET-USERS':
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-USERS-TOTAL-COUNT': {
            return {...state, totalCount: action.count}
        }
        case 'SET-TOGGLE-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'SET-TOGGLE-FOLLOWING':
            return {
                ...state,
                followingProgress: action.isFollow ? [...state.followingProgress, action.userId] : state.followingProgress.filter(u => u !== action.userId)
            }
        default:
            return state
    }
}
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const setUsersTotalCountAC = (count: number) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        count
    } as const
}
export const setToggleFetchingAC = (isFetching: boolean) => {
    return {
        type: 'SET-TOGGLE-FETCHING',
        isFetching
    } as const
}
export const setToggleFollowingAC = (isFollow: boolean, userId: number) => {
    return {
        type: 'SET-TOGGLE-FOLLOWING',
        isFollow,
        userId
    } as const
}

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
// export type AppDispatch = ThunkDispatch<AppStateType, unknown, ActionsUserType>
//Thunks
export const getUsersTC = (currentPage: number, pageSize: number):ThunkType => (dispatch) => {
        dispatch(setToggleFetchingAC(true))
        dispatch(setCurrentPageAC(currentPage))
        API.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setToggleFetchingAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setUsersTotalCountAC(data.totalCount))
            })

    }
export const followTC = (userId: number) => (dispatch: Dispatch<ActionsUserType>) => {
        dispatch(setToggleFollowingAC(true, userId))
        API.follow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(followAC(userId))
                }
                dispatch(setToggleFollowingAC(false, userId))

            })

    }
export const unFollowTC = (userId: number) => (dispatch: Dispatch<ActionsUserType>) => {
        dispatch(setToggleFollowingAC(true, userId))
        API.unFollow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(unFollowAC(userId))
                }
                dispatch(setToggleFollowingAC(false, userId))

            })
    }



