import {ActionsTypes} from './state';

const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

export type InitialStateType = {
    dialogsData: Array<DialogsDataType>
    messageData: Array<MessageDataType>
    newMessage: string
}
export type MessageDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
}
// export type ActionsType = ReturnType<typeof updateNewMessageActionCreator> | ReturnType<typeof sendMessageActionCreator>
const initialState: InitialStateType = {
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
const dialogReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            return {...state, newMessage: action.body}


        case SEND_NEW_MESSAGE:
            // state.messageData.push({id: 6, message: body})
            // state.newMessage = ''
            let body = state.newMessage
            let newMessage = {id: 6, message: body}
            return {...state, newMessage: '', messageData: [...state.messageData, newMessage]}


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