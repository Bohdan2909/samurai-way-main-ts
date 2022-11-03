import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


type DialogItemType = {
    name: string
    id: number
}
const DialogsITem = (props: DialogItemType) => {

    let path = `/dialogs/${props.id}`
    return (
        <div className={s.dialogsItems}>
            <div className={s.item}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>

        </div>
    );
};

export default DialogsITem;