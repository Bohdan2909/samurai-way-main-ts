import React from 'react';
// import {StoreType} from '../../redux/state';
import {
    DialogsDataType,
    MessageDataType,
    sendMessageActionCreator,
    updateNewMessageActionCreator
} from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


// type DialogsType = {
//     store: StoreType
// }


// const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState()
//
//                     const addMessage = () => {
//                         store.dispatch(sendMessageActionCreator())
//                     }
//                     const changeMessageHandler = (text: string) => {
//
//                         store.dispatch(updateNewMessageActionCreator(text))
//
//                     }
//                     return <Dialogs dialogs={state.dialogsPage.dialogsData}
//                                     messages={state.dialogsPage.messageData}
//                                     newMessage={state.dialogsPage.newMessage}
//                                     addMessage={addMessage}
//                                     changeMessageHandler={changeMessageHandler}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>
//
//     );
// };
type MapStatePropsType = {
    dialogs: DialogsDataType[]
    messages: MessageDataType[]
    newMessage: string
}
type MapDispatchPropsType = {
    addMessage: ()=> void
    changeMessageHandler:(text:string) => void
}
export type DialogsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messageData,
        newMessage: state.dialogsPage.newMessage
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        changeMessageHandler: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;

