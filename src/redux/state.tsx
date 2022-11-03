import {rerenderApp} from '../render';

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type MessageDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
}
export type ProfilePageType = {
    postData: Array<PostDataType>
}
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messageData: Array<MessageDataType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: StateType = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi how are you?', likesCount: 12},
            {id: 2, message: 'Hi how are you?', likesCount: 13},
            {id: 3, message: 'Hi how are you?', likesCount: 42},
            {id: 4, message: 'Hi how are you?', likesCount: 32},
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Andres'},
            {id: 2, name: 'Bob'},
            {id: 3, name: 'Alex'}
        ],
        messageData: [
            {id: 1, message: 'What did you do?'},
            {id: 2, message: 'How are you do?'},
            {id: 3, message: 'What you do?'},
        ]
    }
}
export const addPost = (textMessage:string) => {
    let newPost:PostDataType = {
        id: 5, message: textMessage, likesCount: 42
    }
    state.profilePage.postData.push(newPost)
    rerenderApp(state)
}

export default state;