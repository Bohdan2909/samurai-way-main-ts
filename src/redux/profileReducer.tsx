
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

export type ActionsProfileType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>
    | SetUserProfileTypeAC

const profileReducer = (state: InitialStateType = initialState, action: ActionsProfileType): InitialStateType => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {id: state.postData.length + 1, message: action.textMessage, likesCount: 42}

            return {...state, postData: [newPost, ...state.postData], newPostText: ''}

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}


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
//Thunks
export const setUserProfileTC = (userId: number) => (dispatch: Dispatch) =>
    API.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
export default profileReducer