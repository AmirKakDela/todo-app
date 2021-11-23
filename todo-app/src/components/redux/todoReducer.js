import * as types from './action/types';
const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] }

        case types.DELETE_TODO:
            console.log(state);
            return { ...state, todos: [...state.todos].filter(t => t._id !== action.payload) }

        case types.STATUS_TODO:
            return {
                ...state, todos: [...state.todos].map(t => {
                    if (t._id === action.payload._id) t.status = !t.status
                    return t
                })
            }

        case types.EDIT_TODO:
            return {
                ...state, todos: [...state.todos].map(t => {
                    if (t._id === action.payload.id) t.title = action.payload.title
                    return t
                })
            }

        case types.GET_ALL_TODOS:
            return {
                ...state, todos: action.payload
            }
        default:
            return state
    }

}

export default todoReducer;