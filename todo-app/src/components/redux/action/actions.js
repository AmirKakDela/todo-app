import * as types from './types'

export function addTodo(todo) {
    return {
        type: types.ADD_TODO,
        payload: todo
    }
}

export function deleteTodo(id) {
    return {
        type: types.DELETE_TODO,
        payload: id
    }
}

export function statusTodo(todo) {
    return {
        type: types.STATUS_TODO,
        payload: todo
    }
}

export function editTodo(todo) {
    return {
        type: types.EDIT_TODO,
        payload: todo
    }
}

export const saveAllTodos = (todos) => ({ type: types.GET_ALL_TODOS, payload: todos })

export const logIn = (userData) => ({ type: types.LOG_IN, payload: userData })

export const logOut = () => ({ type: types.LOG_OUT });