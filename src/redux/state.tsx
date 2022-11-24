// import {rerenderApp} from '../index';
import profileReducer, {addPostActionCreator, updateNewPostActionCreator} from './profileReducer';
import dialogReducer, {sendMessageActionCreator, updateNewMessageActionCreator} from './dialogReducer';

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
    newPostText: string
}
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messageData: Array<MessageDataType>
    newMessage: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    state: StateType
    updateNewPostText: (newText: string) => void
    rerenderApp: (state: StateType) => void
    addPost: (textMessage: string) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}


export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>
    | ReturnType<typeof sendMessageActionCreator>


let store: StoreType = {
    state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi how are you?', likesCount: 12},
                {id: 2, message: 'Hi how are you?', likesCount: 13},
                {id: 3, message: 'Hi how are you?', likesCount: 42},
                {id: 4, message: 'Hi how are you?', likesCount: 32},
            ],
            newPostText: 'it-kamasutra.com'
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
            ],
            newMessage: ''
        }
    },
    rerenderApp() {
        console.log('hey')
    },
    subscribe(observer) {

        this.rerenderApp = observer
    },
    updateNewPostText(newText: string) {
        this.state.profilePage.newPostText = newText
        this.rerenderApp(this.state)
    },
    addPost(textMessage) {
        let newPost: PostDataType = {
            id: this.state.profilePage.postData.length + 1, message: textMessage, likesCount: 42
        }
        this.state.profilePage.postData.push(newPost)
        this.state.profilePage.newPostText = ''
        this.rerenderApp(this.state)
    },
    getState() {
        return this.state
    },
    dispatch(action) {
        this.state.profilePage = profileReducer(this.state.profilePage, action)
        this.state.dialogsPage = dialogReducer(this.state.dialogsPage, action)
        this.rerenderApp(this.state)
        // if (action.type === ADD_POST) {
        //     let newPost: PostDataType = {
        //         id: this.state.profilePage.postData.length + 1, message: action.textMessage, likesCount: 42
        //     }
        //     this.state.profilePage.postData.push(newPost)
        //     this.state.profilePage.newPostText = ''
        //     this.rerenderApp(this.state)
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this.state.profilePage.newPostText = action.newText
        //     this.rerenderApp(this.state)
        // } else if (action.type === UPDATE_NEW_MESSAGE) {
        //     this.state.dialogsPage.newMessage = action.body
        //     this.rerenderApp(this.state)
        // } else if (action.type === SEND_NEW_MESSAGE) {
        //     let body = this.state.dialogsPage.newMessage
        //     this.state.dialogsPage.messageData.push({id: 6, message: body})
        //     this.state.dialogsPage.newMessage = ''
        //     this.rerenderApp(this.state)
        //
        // }
    }
}
// export const addPostActionCreator = (post: string) => {
//     return {
//         type: ADD_POST,
//         textMessage: post
//     } as const
// }
// export const updateNewPostActionCreator = (text: string) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT,
//         newText: text
//     } as const
// }
// export const updateNewMessageActionCreator = (text: string) => {
//     return {
//         type: UPDATE_NEW_MESSAGE,
//         body: text
//     } as const
// }
// export const sendMessageActionCreator = () => {
//     return {
//         type: SEND_NEW_MESSAGE
//
//     } as const
// }

export default store;