import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem';
import DialogsItem from './DialogsItem/DialogsITem';
import {
    ActionsTypes,
    DialogsDataType,
    MessageDataType, sendMessageActionCreator,
    updateNewMessageActionCreator
} from '../../redux/state';


type DialogsType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessageDataType>
    dispatch: (action: ActionsTypes) => void
    newMessage: string
}


const Dialogs = (props: DialogsType) => {

    let dialogsElement = props.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m => <MessageItem key={m.id} message={m.message}/>)

    const addMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewMessageActionCreator(text))

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <textarea onChange={changeMessageHandler}
                      value={props.newMessage}
                      name="messages"
                      id="messages"
                      cols={2}
                      rows={4}>
            </textarea>
            <button onClick={addMessage}>Add</button>
        </div>
    );
};

export default Dialogs;