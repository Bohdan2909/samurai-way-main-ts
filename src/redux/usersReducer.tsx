export type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    followed: boolean
    fullName: string
    location: LocationType
}
export type ActionsType = FollowAC | UnFollowAC|SetUsersAC
export type initialStateType = {
    users: UsersType[]
}
const initialState = {
    users: [
        {id: 1, followed: true, fullName: 'Mykola', location: {city: 'London', country: 'England'}},
        {id: 2, followed: false, fullName: 'Petro', location: {city: 'Paris', country: 'France'}},
        {id: 3, followed: false, fullName: 'Ivan', location: {city: 'Rome', country: 'Italy'}},
        {id: 4, followed: false, fullName: 'Bob', location: {city: 'Madrid', country: 'Spain'}}
    ]
}

export const usersReducer = (state: initialStateType =initialState, action: ActionsType):initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}

        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}

        case 'SET-USERS':
            return {...state, users:[...state.users, ...action.users]}

        default:
            return state
    }
}
export type FollowAC = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export type UnFollowAC = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export type SetUsersAC = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}