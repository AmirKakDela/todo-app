import './App.css';
import './app.scss';
import Header from './components/Header/Header';
import AuthSignUp from './components/Auth/AuthSignUp'
import AuthLogIn from './components/Auth/AuthLogIn'
import Todo from './components/Todo/Todo';
import UserPage from "./components/UserPage/UserPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { thunkAuth } from "./components/redux/action/thunkUserActions";

const App = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('сработал use effect app.js');
        dispatch(thunkAuth())
        // eslint-disable-next-line
    }, [])
    console.log(isAuth);

    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <div className="content">
                    {!isAuth ?
                        <Routes>
                            <Route path='/login' element={<AuthLogIn />} />
                            <Route path='/signup' element={<AuthSignUp />} />
                            <Route path='*' element={<Navigate to='/login' />} />
                        </Routes >
                        :
                        <Routes>
                            <Route exact path='/' element={<Todo />} />
                            <Route path='/profile' element={<UserPage />} />
                            <Route path='/login' element={<Navigate to='/' />} />
                        </Routes>}
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App;
