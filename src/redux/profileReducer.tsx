import {ActionsTypes, PostDataType, ProfilePageType} from './state';
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST'
const initialState = {
    postData: [
        {id: 1, message: 'Hi how are you?', likesCount: 12},
        {id: 2, message: 'Hi how are you?', likesCount: 13},
        {id: 3, message: 'Hi how are you?', likesCount: 42},
        {id: 4, message: 'Hi how are you?', likesCount: 32},
    ],
    newPostText: 'it-kamasutra.com'
}
const profileReducer = (state:ProfilePageType = initialState, action:ActionsTypes) => {
    switch(action.type){
        case ADD_POST:
            let newPost: PostDataType = {
                id: state.postData.length + 1, message: action.textMessage, likesCount: 42
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
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