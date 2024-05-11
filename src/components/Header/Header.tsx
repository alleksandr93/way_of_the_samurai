import React from 'react';
import logo from '../../img/logo.webp';
import s from './Header.module.scss'
export const Header = () => {
    return (
            <header className={s.header}>
                <img src={logo} alt="Картиночка"/>
            </header>

    );
};

