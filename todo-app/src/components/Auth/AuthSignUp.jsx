import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { thunkSignUp } from '../redux/action/thunkUserActions';
import { useDispatch } from 'react-redux';

import './auth.scss';
const AuthSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handlerSignUp = () => {
        console.log('email >>>', email);
        console.log('password >>>', password);
        console.log('name >>>', name);
        dispatch(thunkSignUp({ email, name, password }));

    }


    return (
        <div className="auth-wrap auth-wrap_AUTH_UP">
            <form className="auth" onSubmit={(e) => e.preventDefault()}>
                <h1 className="auth__title">Регистрация</h1>

                <label htmlFor="auth__input_email">
                    Email
                    <input type="email"
                        className="auth__input auth__input_email"
                        placeholder="Введите email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="auth__input_name">
                    Имя пользователя
                    <input type="text"
                        className="auth__input auth__input_name"
                        placeholder="Введите имя пользователя"
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label htmlFor="auth__input_password">
                    Пароль
                    <input type="password"
                        className="auth__input auth__input_password"
                        placeholder="Введите пароль"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <button className="auth__button"
                    onClick={handlerSignUp}
                >Войти</button>
                <Link to="/signin" className="auth__redirect">Уже есть аккаунт? Войти</Link>
            </form>
        </div>
    )
}

export default AuthSignUp
