import React from 'react'
import './todoInput.scss';
import { BsPlusLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { thunkAddTodo } from '../redux/action/thunkTodoActions';

const TodoInput = () => {
    const [todoValue, setTodoValue] = React.useState('');
    const userId = useSelector(state => state.user.user.id)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        if (todoValue.length >= 2) {
            dispatch(thunkAddTodo({ title: todoValue, userId }))
            setTodoValue('');
        } else {
            alert('Введите корректное todo');
        }
    }

    return (
        <>
            <button onClick={handleSubmit} className="todo__button">
                <span><BsPlusLg /></span>
            </button>
            <input type="text" className="todo__input" placeholder="Введите задачу..."
                value={todoValue} onChange={(e) => setTodoValue(e.target.value)}
            />
        </>
    )
}

export default TodoInput;