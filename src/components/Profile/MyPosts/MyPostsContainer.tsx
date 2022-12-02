import React, {ChangeEvent, ChangeEventHandler} from 'react';
// import {ActionsTypes, PostDataType, StoreType} from '../../../redux/state';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {addPostActionCreator, PostDataType, updateNewPostActionCreator} from '../../../redux/profileReducer';

//
// type MyPostsType = {
//     // posts: Array<PostDataType>
//     // addPost: (textMessage: string) => void
//     // newPost: string
//     // updateNewPostText: (newText: string) => void
//     // dispatch: (action: ActionsTypes) => void
//     store: StoreType
// }
// const MyPostsContainer = () => {
//     // let state = props.store.getState()
//
//
//     return (
//         <StoreContext.Consumer>
//
//             {
//                 (store) => {
//                     let state = store.getState()
//                     const addPost = (newText: string) => {
//                         store.dispatch(addPostActionCreator(newText))
//                     }
//                     const updateNewPostText = (text: string) => {
//                         store.dispatch(updateNewPostActionCreator(text))
//                     }
//                     return <MyPosts updateNewPostText={updateNewPostText}
//                                     addPost={addPost}
//                                     posts={state.profilePage.postData}
//                                     newPost={state.profilePage.newPostText}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// };
type MapStatePropsType = {
    posts: PostDataType[]
    newPost: string
}
type MapDispatchType = {
    updateNewPostText: (text: string) => void
    addPost: (newText: string) => void
}
export type MyPostsType = MapStatePropsType & MapDispatchType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.postData,
        newPost: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        },
        addPost: (newText: string) => {
            dispatch(addPostActionCreator(newText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;