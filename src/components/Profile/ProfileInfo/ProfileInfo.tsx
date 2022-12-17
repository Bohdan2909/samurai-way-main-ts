import React from 'react';
import {ProfileType} from '../../../redux/profileReducer';
import Preloader from '../../common/Preloader/Preloader';
import {NavLink} from 'react-router-dom';
type ProfileInfoTypeProps = {
    profile:ProfileType
}
const ProfileInfo = (props:ProfileInfoTypeProps) => {
    if(!props.profile) return <Preloader/>
    return (
        <div>
            <div>
                <img src="http://cdn2.hubspot.net/hub/145335/file-407541786-jpeg/blog-files/content-marketing.jpeg"
                     alt="content"/>
            </div>
            <div>

                <img src={props.profile.photos.large} alt="avatar"/>

            </div>
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