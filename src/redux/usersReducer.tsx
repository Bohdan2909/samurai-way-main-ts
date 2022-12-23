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

export type ActionsType = FollowTypeAC |
    UnFollowTypeAC |
    SetUsersTypeAC|
    SetCurrentPageTypeAC|
    SetUsersTotalCountTypeAC
|SetToggleFetchingTypeAC
|SetToggleFollowingTypeAC
export type initialStateType = {
    users: UsersType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching:boolean
    followingProgress: number[]
}
const initialState = {
    users: [],
    totalCount: 20,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    followingProgress:[]
}

export const usersReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}

        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}

        case 'SET-USERS':
            // return {...state, users: [...state.users, ...action.users]}
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage:action.currentPage}
        case 'SET-USERS-TOTAL-COUNT':{
            return {...state, totalCount:action.count}
        }
        case 'SET-TOGGLE-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'SET-TOGGLE-FOLLOWING':
            return {
                ...state,
                followingProgress:action.isFollow?[...state.followingProgress, action.userId]:state.followingProgress.filter(u=>u!==action.userId)
            }
        default:
            return state
    }
}
export type FollowTypeAC = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export type UnFollowTypeAC = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export type SetUsersTypeAC = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export type SetCurrentPageTypeAC = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage:number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export type SetUsersTotalCountTypeAC = ReturnType<typeof setUsersTotalCountAC>
export const setUsersTotalCountAC = (count:number) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        count
    } as const
}
export type SetToggleFetchingTypeAC = ReturnType<typeof setToggleFetchingAC>
export const setToggleFetchingAC = (isFetching:boolean) => {
    return {
        type: 'SET-TOGGLE-FETCHING',
        isFetching
    } as const
}
export type SetToggleFollowingTypeAC = ReturnType<typeof setToggleFollowingAC>
export const setToggleFollowingAC = (isFollow:boolean, userId:number) => {
    return {
        type: 'SET-TOGGLE-FOLLOWING',
        isFollow,
        userId
    } as const
}