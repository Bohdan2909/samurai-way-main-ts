
import {Dispatch} from 'redux';
import {API} from '../api/api';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST'
export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePhotos = {
    large: string
    small: string
}
type ProfileContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: boolean
    fullName: string
    contacts: ProfileContactsType
    photos: ProfilePhotos
}
export type InitialStateType = {
    postData: Array<PostDataType>
    newPostText: string
    status:string
    profile: ProfileType
}
const initialState: InitialStateType = {
    postData: [
        {id: 1, message: 'Hi how are you?', likesCount: 12},
        {id: 2, message: 'Hi how are you?', likesCount: 13},
        {id: 3, message: 'Hi how are you?', likesCount: 42},
        {id: 4, message: 'Hi how are you?', likesCount: 32},
    ],
    newPostText: '',
    status: '',
    profile: {
        userId: 1,
        lookingForAJob: false,
        lookingForAJobDescription: false,
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: ''
        },
        photos: {
            small: '',
            large: '',
        }

    }
}
type SetUserProfileTypeAC = ReturnType<typeof setUserProfileAC>
type SetStatusTypeAC = ReturnType<typeof setStatusAC>
export type ActionsProfileType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>
    | SetUserProfileTypeAC
    |SetStatusTypeAC

const profileReducer = (state: InitialStateType = initialState, action: ActionsProfileType): InitialStateType => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {id: state.postData.length + 1, message: action.textMessage, likesCount: 42}

            return {...state, postData: [newPost, ...state.postData], newPostText: ''}

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'SET-STATUS':
            return {...state, status:action.status}

        default:
            return state
    }

}
export const addPostActionCreator = (post: string) => {
    return {
        type: ADD_POST,
        textMessage: post
    } as const
}
export const updateNewPostActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
export const setStatusAC = (status:string) => {
    return {
        type:'SET-STATUS',
        status
    }as const
}
//Thunks
export const getUserProfileTC = (userId: number) => (dispatch: Dispatch) =>
    API.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
export const getStatusTC = (userId: number) => (dispatch: Dispatch) =>
    API.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data))
        })
export const updateStatusTC = (status: string) => (dispatch: Dispatch) =>
    API.updatePost(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatusAC(status))
            }

        })
export default profileReducer