import axios from 'axios';
import { logIn } from './actions';

export const thunkSignUp = (userData) => {
    return async dispatch => {
        try {
            // eslint-disable-next-line
            const response = await axios.post('/api/auth/signup', userData);
        } catch (e) {
            alert(userData.data.message)
        }
    }
}

export const thunkLogIn = (userData) => {
    return async dispatch => {
        try {
            const response = await axios.post('/api/auth/login', userData);
            dispatch(logIn(response.data.user));
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            console.log(e);
        }
    }

}

export const thunkAuth = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/api/auth/auth', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            console.log(response)
            dispatch(logIn(response.data.user))
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            // localStorage.removeItem('token')
            console.log(e)
        }
    }
}