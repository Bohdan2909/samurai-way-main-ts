import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderTypeProps = {
    isAuth: boolean
    login: string | null
}
const Header = (props: HeaderTypeProps) => {
    return (

        <header className={s.header}>
            <NavLink to={'/profile'}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png"
                    alt="logo"/>
            </NavLink>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>

    );
};

export default Header;