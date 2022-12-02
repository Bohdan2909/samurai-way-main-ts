import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (

        <header className={s.header}>
           <NavLink to={'/profile'}>
               <img
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png"
               alt="logo"/>
           </NavLink>
        </header>

    );
};

export default Header;