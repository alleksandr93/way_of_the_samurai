import React from 'react';
import s from './NavBar.module.scss';
import {NavLink} from 'react-router-dom';


export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li ><NavLink className={el=>el.isActive ?s.activ :s.item} to="/profile">Profile</NavLink></li>
                <li ><NavLink className={el=>el.isActive ?s.activ :s.item} to="/dialogs">Messages</NavLink></li>
                <li ><NavLink className={el=>el.isActive ?s.activ :s.item} to="/news">News</NavLink></li>
                <li ><NavLink className={el=>el.isActive ?s.activ :s.item} to="/music">Music</NavLink></li>
                <li ><NavLink className={el=>el.isActive ?s.activ :s.item} to="/setting">Settings</NavLink></li>
            </ul>
        </nav>
    );
};

