import s from '../Dialogs.module.css';
import React from 'react';

type MessageItemType = {
    message: string
}
const MessageItem = (props: MessageItemType) => {
    return (
        <div className={s.messages}>
            <div className={s.message}>{props.message}</div>

        </div>
    );
};
export default MessageItem