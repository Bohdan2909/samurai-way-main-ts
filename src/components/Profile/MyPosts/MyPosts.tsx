import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {PostDataType} from '../../../redux/profileReducer';

type MyPostsType = {
    posts: Array<PostDataType>
    newPost: string
    updateNewPostText: (text: string) => void
    addPost: (newText: string) => void
}
const MyPosts = (props: MyPostsType) => {
    let refTextarea = React.createRef<HTMLTextAreaElement>()
    const onAddPost = () => {

        // props.dispatch({type:'ADD-POST', textMessage: props.newPost})
        // props.dispatch(addPostActionCreator(props.newPost))
        props.addPost(props.newPost)


    }
    let postsElement = props.posts.map(post => <Post key={post.id} message={post.message} like={post.likesCount}/>)
    const changeNewPostHandler = () => {
        if (refTextarea.current) {
            let text = refTextarea.current.value
            // // props.dispatch({type: 'UPDATE-NEW-POST', newText: text})
            // props.dispatch(updateNewPostActionCreator(text))
            props.updateNewPostText(text)
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
                <button onClick={onAddPost}
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