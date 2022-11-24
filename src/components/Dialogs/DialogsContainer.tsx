import React from 'react';
import {StoreType} from '../../redux/state';
import {sendMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import {StoreContext} from '../../redux/store-context';


// type DialogsType = {
//     store: StoreType
// }


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    const addMessage = () => {
                        store.dispatch(sendMessageActionCreator())
                    }
                    const changeMessageHandler = (text: string) => {

                        store.dispatch(updateNewMessageActionCreator(text))

                    }
                    return <Dialogs dialogs={state.dialogsPage.dialogsData}
                                    messages={state.dialogsPage.messageData}
                                    newMessage={state.dialogsPage.newMessage}
                                    addMessage={addMessage}
                                    changeMessageHandler={changeMessageHandler}
                    />
                }
            }
        </StoreContext.Consumer>

    );
};

export default DialogsContainer;