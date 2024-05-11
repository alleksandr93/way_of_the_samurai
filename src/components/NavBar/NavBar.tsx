import React from 'react';
import s from './NavBar.module.scss';

console.log(s)
export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.item2}`}><a href="#">Profile</a></li>
                <li className={s.item}><a href="#">Messages</a></li>
                <li className={s.item}><a href="#">News</a></li>
                <li className={s.item}><a href="#">Music</a></li>
                <li className={s.item}><a href="#">Settings</a></li>
            </ul>
        </nav>
    );
};

