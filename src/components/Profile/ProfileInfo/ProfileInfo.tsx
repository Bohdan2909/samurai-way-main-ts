import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {ProfileType} from '../../../redux/profileReducer';
import Preloader from '../../common/Preloader/Preloader';
import {NavLink} from 'react-router-dom';

type ProfileInfoTypeProps = {
    profile: ProfileType
}
const ProfileInfo = (props: ProfileInfoTypeProps) => {
    if (!props.profile) return <Preloader/>
    return (
        <div>
            <div>
                <img src={props.profile.photos.large} alt="avatar"/>
            </div>
            <ProfileStatus/>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.lookingForAJob}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div>{props.profile.contacts.github}</div>
            <div>{props.profile.contacts.instagram}</div>
            <div>{props.profile.contacts.vk}</div>
        </div>
    );
};


export default ProfileInfo


type ProfileStatusPropsType = {}
export const ProfileStatus = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState('')
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setEditMode(!editMode)
        }
    }
    const onClickChangeEditHandler = () => {
        setEditMode(!editMode)
    }
    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        <div>
            {editMode
                ? <div>
                    <span onDoubleClick={onClickChangeEditHandler}>{title}</span>
                </div>
                : <div>
                    <input
                        autoFocus={title !== ''}
                        placeholder={'Write your status...'}
                        onKeyDown={onKeyDownHandler}
                        onBlur={onClickChangeEditHandler}
                        value={title}
                        onChange={changeInputHandler}
                        type="text"/>
                </div>}
        </div>
    )
}
