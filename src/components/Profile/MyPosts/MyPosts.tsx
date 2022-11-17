import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {ActionsTypes, addPostActionCreator, PostDataType, updateNewPostActionCreator} from '../../../redux/state';


type MyPostsType = {
    posts: Array<PostDataType>
    // addPost: (textMessage: string) => void
    newPost: string
    // updateNewPostText: (newText: string) => void
    dispatch:(action:ActionsTypes) => void
}
const MyPosts = (props: MyPostsType) => {
    let refTextarea = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {

            // props.dispatch({type:'ADD-POST', textMessage: props.newPost})
            props.dispatch(addPostActionCreator(props.newPost))



    }
    let postsElement = props.posts.map(post => <Post key={post.id} message={post.message} like={post.likesCount}/>)
    const changeNewPostHandler = () => {
        if (refTextarea.current) {
            let text = refTextarea.current.value

            // props.dispatch({type: 'UPDATE-NEW-POST', newText: text})
            props.dispatch(updateNewPostActionCreator(text))
        }
    }
    return (
        <div className={s.myPosts}>
            <h2>My posts</h2>
            <div className={s.textWrapper}>
                <textarea ref={refTextarea} className={s.textarea}
                          placeholder={'Write your post...'}
                          name="post"
                          id="text"
                          cols={2}
                          rows={4}
                          value={props.newPost}
                          onChange={changeNewPostHandler}
                >
                </textarea>
                <button onClick={addPost}
                        className={s.button}>
                    Add post
                </button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;