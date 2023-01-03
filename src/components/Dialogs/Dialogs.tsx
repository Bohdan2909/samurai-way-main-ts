import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem';
import DialogsItem from './DialogsItem/DialogsITem';
import {DialogsDataType, MessageDataType} from '../../redux/dialogReducer';
import {Redirect} from 'react-router-dom';




type DialogsType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessageDataType>
    newMessage: string
    addMessage:() => void
    changeMessageHandler:(text:string) => void
    // isAuth:boolean
}


const Dialogs = (props: DialogsType) => {

    let dialogsElement = props.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m => <MessageItem key={m.id} message={m.message}/>)

    const onAddMessage = () => {
        props.addMessage()
    }
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.changeMessageHandler(text)

    }
    // if(!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <textarea onChange={onChangeMessageHandler}
                      value={props.newMessage}
                      name="messages"
                      id="messages"
                      cols={2}
                      rows={4}>
            </textarea>
            <button onClick={onAddMessage}>Add</button>
        </div>
    );
};

export default Dialogs;