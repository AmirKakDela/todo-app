import * as types from './action/types';

const INITIAL_STATE = {
    user: {},
    isAuth: false
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.LOG_IN:
            return { ...state, user: { ...action.payload }, isAuth: true }
        case types.LOG_OUT:
            localStorage.removeItem('token') // это нужно убрать потом из reducer`a
            return {
                ...state, user: {}, isAuth: false
            }
        default:
            return state
    }
}

export default authReducer;