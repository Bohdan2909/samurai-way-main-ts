import {ActionsTypes, DialogsPageType} from './state';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'



const initialState= {
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
const dialogReducer = (state:DialogsPageType = initialState, action:ActionsTypes) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.body
            return state
        case SEND_NEW_MESSAGE:
            let body = state.newMessage
            state.messageData.push({id: 6, message: body})
            state.newMessage = ''
            return state
        default:
            return state
    }
}
export const updateNewMessageActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        body: text
    } as const
}
export const sendMessageActionCreator = () => {
    return {
        type: SEND_NEW_MESSAGE

    } as const
}

export default dialogReducer