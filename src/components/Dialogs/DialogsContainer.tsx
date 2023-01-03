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
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


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
    // isAuth: boolean
}
type MapDispatchPropsType = {
    addMessage: () => void
    changeMessageHandler: (text: string) => void
}
export type DialogsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messageData,
        newMessage: state.dialogsPage.newMessage,
        // isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        changeMessageHandler: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}
export default compose<React.ComponentType>(connect<MapStatePropsType,MapDispatchPropsType,{},AppStateType>(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect<MapStatePropsType,MapDispatchPropsType,{},AppStateType>(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
//
// export default DialogsContainer;

