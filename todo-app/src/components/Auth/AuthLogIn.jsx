import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.scss';
import { thunkLogIn } from '../redux/action/thunkUserActions';
import { useDispatch } from 'react-redux';


const AuthLogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    
    const handlerLoginIn = () => {
        dispatch(thunkLogIn({ email, password }));
    }

    return (
        <div className="auth-wrap">
            <form className="auth" onSubmit={(e) => e.preventDefault()}>
                <h1 className="auth__title">Вход</h1>
                <label htmlFor="auth__input_email">
                    Email
                    <input type="email"
                        className="auth__input auth__input_email"
                        placeholder="Введите email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
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
                <button className="auth__button" onClick={handlerLoginIn}>Войти</button>
                <Link to="/signup" className="auth__redirect">Создать аккаунт</Link>
            </form>
        </div>
    )
}

export default AuthLogIn
