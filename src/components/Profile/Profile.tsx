import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from '../../redux/state';


type ProfileType = {
    posts: ProfilePageType
    // addPost: (textMessage: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch:(action: ActionsTypes) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts.postData}
                     newPost = {props.posts.newPostText}
                     // addPost={props.addPost}
                     // updateNewPostText={props.updateNewPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;