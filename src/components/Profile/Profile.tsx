import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import { StoreType} from '../../redux/state';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profileReducer';

//
// type ProfileType = {
//     store:StoreType
//     // posts: ProfilePageType
//     // addPost: (textMessage: string) => void
//     // updateNewPostText: (newText: string) => void
//     // dispatch:(action: ActionsTypes) => void
// }
type ProfileTypeProps = {
    profile:ProfileType
}
const Profile = (props:ProfileTypeProps) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;