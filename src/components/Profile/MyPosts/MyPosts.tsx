import React from 'react';
import s from './MyPosts.module.scss';
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post likesCouns={0} message={'Hi, how are you?'}/>
                <Post likesCouns={23} message={'it\'s my first post'}/>
            </div>
        </div>
    );
};

