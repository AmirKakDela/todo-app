import React from 'react';
import './header.scss';
import { BiLogIn, BiUser } from 'react-icons/bi'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const user = useSelector(state => state.user.user)

    return (
        <div className="header">
            <div className="header__container">
                <Link to='/'>
                    <div className="header__logo">TODO APP</div>
                </Link>
                <div className="header__menu">
                    {!isAuth ?
                        <div className="header__auth">
                            Войти
                            <span><BiLogIn style={{ fontSize: 20 }} /></span>
                        </div>
                        :
                        <Link to='/profile' >
                            <div className="header__profile">
                                {user.name}
                                <span><BiUser style={{ fontSize: 20 }} /></span>
                            </div> </Link>}
                </div>
            </div>
        </div>
    )
}

export default Header;
