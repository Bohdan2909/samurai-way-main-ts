import React from 'react';
import s from './Post.module.css'

type PostPropTypes ={
    message: string
    like: number
}

const Post = (props: PostPropTypes) => {
    return (
        <div className={s.item}>
            <img src="https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg" alt="ava"/>
            {props.message}
            <div>
                <span>{props.like} like</span>
            </div>
        </div>
    );
};

export default Post;