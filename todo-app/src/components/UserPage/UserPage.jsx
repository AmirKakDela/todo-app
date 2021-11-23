import React from 'react';
import './userPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/action/actions.js';

const UserPage = () => {
    const user = useSelector(state => state.user.user)


    const dispatch = useDispatch()
    return (
        <div className="user-page-wrapper">
            <div className="user-page">

                <div className="user-page__photo">
                    <img src="" alt="" />
                </div>
                <div className="user-page__name">Имя пользователя: <span> {user.name} </span></div>
                <div className="user-page__name">Почта: <span> {user.email} </span></div>
                    <button className="user-page__button user-page__button_exit"
                        onClick={() => { dispatch(logOut()) }}
                    >Выйти из профиля</button>

            </div>
        </div>
    )
}

export default UserPage
