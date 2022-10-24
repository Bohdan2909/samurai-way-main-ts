import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    name: string
    id: number
}
const DialogItem = (props: DialogItemType) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={s.dialogsItems}>
            <div className={s.item}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>

        </div>
    );
};


type MessageItem= {
    message: string
}
const MessageItem = (props: MessageItem) => {
    return (
        <div className={s.messages}>
            <div className={s.message}>{props.message}</div>

        </div>
    );
};



const Dialogs = () => {
    return (
        <div className={s.dialogs}>
          <DialogItem name={'Andres'} id={1}/>
            <MessageItem message={'What did you do?'}/>
        </div>
    );
};

export default Dialogs;