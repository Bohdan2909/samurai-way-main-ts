import React from 'react';
import s from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem';
import DialogsItem from './DialogsItem/DialogsITem';
import {DialogsDataType, MessageDataType} from '../../redux/state';


type DialogsType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessageDataType>
}


const Dialogs = (props: DialogsType) => {

    let dialogsElement = props.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m => <MessageItem key={m.id} message={m.message}/>)
    let refTextarea = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        alert(refTextarea.current?.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <textarea ref={refTextarea} name="messages" id="" cols={2} rows={4}></textarea>
            <button onClick={addMessage}>Add</button>
        </div>
    );
};

export default Dialogs;