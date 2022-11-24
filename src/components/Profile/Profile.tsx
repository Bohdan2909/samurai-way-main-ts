import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { StoreType} from '../../redux/state';
import MyPostsContainer from './MyPosts/MyPostsContainer';

//
// type ProfileType = {
//     store:StoreType
//     // posts: ProfilePageType
//     // addPost: (textMessage: string) => void
//     // updateNewPostText: (newText: string) => void
//     // dispatch:(action: ActionsTypes) => void
// }

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;