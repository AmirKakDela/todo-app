import axios from 'axios';
import { saveAllTodos, deleteTodo, editTodo, addTodo, statusTodo } from './actions';


export const thunkGetAllTodos = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/api/todos/todos',
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            dispatch(saveAllTodos(response.data))
        } catch (err) {
            console.log('thunkGetAllTodos >>>', err);
        }

    }
}

export const thunkDeleteTodo = (id) => {
    return async dispatch => {
        try {
            await axios.delete(`/api/todos/delete/${id}`);
            dispatch(deleteTodo(id))
        } catch (err) {
            console.log('thunkDeleteTodo >>>', err);
        }

    }
}

export const thunkEditTodo = (todo) => {
    return async dispatch => {
        try {
            await axios.put(`/api/todos/update/${todo._id}`, { title: todo.title });
            dispatch(editTodo(todo))
        } catch (err) {
            console.log('thunkEditTodo >>>', err);
        }
    }
}

export const thunkStatusTodo = (todo) => {
    return async dispatch => {
        try {
            await axios.put(`/api/todos/update/${todo._id}`, { status: !todo.status });
            dispatch(statusTodo(todo))
        } catch (err) {
            console.log('thunkStatusTodo >>>', err);
        }
    }
}

export const thunkAddTodo = (todo) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/todos/add', todo);
            dispatch(addTodo(response.data))
        } catch (err) {
            console.log('thunkAddTodo >>>', err);
        }
    }
}