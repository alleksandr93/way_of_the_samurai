import React from 'react';
import s from './Post.module.scss';

type PostProps ={
    message:string
    likesCouns:number
}
export const Post:React.FC<PostProps> = ({message,likesCouns}) => {
    return (
        <div className={s.item}>
            <img src="https://tomatoheart.com/wp-content/uploads/2017/03/mr-bean-avatar-or-gay-avatardd.jpg"
                 alt=""/>
            {message}
            <div>
                <span>{`${likesCouns} Likes`}</span>
            </div>
        </div>
    );
};

