import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {PostDataType} from '../../../redux/state';


type MyPostsType = {
    posts: Array<PostDataType>
    addPost: (textMessage: string) => void
}
const MyPosts = (props: MyPostsType) => {
    let refTextarea = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if(refTextarea.current){
            props.addPost(refTextarea.current.value)
            refTextarea.current.value=''
        }
    }
    let postsElement = props.posts.map(post => <Post key={post.id} message={post.message} like={post.likesCount}/>)
    return (
        <div className={s.myPosts}>
            <h2>My posts</h2>
            <div className={s.textWrapper}>
                <textarea  ref={refTextarea} className={s.textarea}
                          placeholder={'Write your post...'}
                          name="post"
                          id="text"
                          cols={2}
                          rows={4}>
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