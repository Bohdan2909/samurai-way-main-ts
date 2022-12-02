import {ActionsTypes} from './state';
import {sendMessageActionCreator, updateNewMessageActionCreator} from './dialogReducer';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST'
export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type InitialStateType = {
    postData: Array<PostDataType>
    newPostText: string
}
const initialState: InitialStateType = {
    postData: [
        {id: 1, message: 'Hi how are you?', likesCount: 12},
        {id: 2, message: 'Hi how are you?', likesCount: 13},
        {id: 3, message: 'Hi how are you?', likesCount: 42},
        {id: 4, message: 'Hi how are you?', likesCount: 32},
    ],
    newPostText: ''
}
// export type ActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostActionCreator>

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {id: state.postData.length + 1, message: action.textMessage, likesCount: 42}

            return {...state, postData: [newPost, ...state.postData], newPostText: ''}

        case UPDATE_NEW_POST_TEXT:
            // state.newPostText = action.newText
            return {...state, newPostText: action.newText}


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

export default profileReducer