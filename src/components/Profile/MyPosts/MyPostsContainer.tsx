import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {ActionsTypes, PostDataType, StoreType} from '../../../redux/state';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {StoreContext} from '../../../redux/store-context';

//
// type MyPostsType = {
//     // posts: Array<PostDataType>
//     // addPost: (textMessage: string) => void
//     // newPost: string
//     // updateNewPostText: (newText: string) => void
//     // dispatch: (action: ActionsTypes) => void
//     store: StoreType
// }
const MyPostsContainer = () => {
    // let state = props.store.getState()


    return (
        <StoreContext.Consumer>

            {
                (store) => {
                    let state = store.getState()
                    const addPost = (newText: string) => {
                        store.dispatch(addPostActionCreator(newText))
                    }
                    const updateNewPostText = (text: string) => {
                        store.dispatch(updateNewPostActionCreator(text))
                    }
                    return <MyPosts updateNewPostText={updateNewPostText}
                                    addPost={addPost}
                                    posts={state.profilePage.postData}
                                    newPost={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;