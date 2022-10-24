import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <h2>My posts</h2>
            <div className={s.textWrapper}>
                <textarea className={s.textarea}
                          placeholder={'Write your post...'}
                          name="post"
                          id="text"
                          cols={2}
                          rows={4}>

                </textarea>
                <button className={s.button}>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, what are you doing?'} like={20}/>
                <Post message={'I am learn React'} like={30}/>

            </div>

        </div>
    );
};

export default MyPosts;