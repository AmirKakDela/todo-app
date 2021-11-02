import React, { useEffect, useState } from "react";
import "../App.css";
import { arrayTodos } from "../todos-json";
import { BsPlusLg } from 'react-icons/bs';
// import { CSSTransition } from 'react-transition-group';
import TodoItem from "./TodoItem";
const { v4: uuidv4 } = require('uuid');

const Todo = () => {
    const [todos, setTodos] = useState(arrayTodos);
    const [inputValue, setInputValue] = useState('');
    const [filteredTodos, setFilteredTotos] = useState(todos);
    const [menuStatus, setMenuStatus] = useState('all')

    useEffect(() => {
        setFilteredTotos(todos)
    }, [todos])

    const addTodo = () => {
        if (inputValue === '') {
            // TODO: сделать нормальное уведомление, а не alert
            alert('Поле не должно быть пустым');
        } else {
            setTodos(prev => [{ id: uuidv4(), title: inputValue, status: false }, ...prev])
            setInputValue('');
            setMenuStatus('all')
        }
    }

    const saveTodo = (id, value) => {
        [...filteredTodos].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setFilteredTotos([...todos])
    }

    const todoFilter = status => {
        if (status === 'all') {
            setFilteredTotos(todos)
        } else {
            let newTodos = [...todos].filter(item => item.status === status)
            setFilteredTotos(newTodos);
        }
        setMenuStatus(status)
    }

    const toggleStatus = (id) => {
        const index = todos.map(task => task.id).indexOf(id);
        todos[index].status = !todos[index].status;
        setTodos([...todos]);
        // TODO: подумать над этой функцией (делать setTodos или setFiltered)
    }

    const deleteTodo = id => {
        const index = todos.map(task => task.id).indexOf(id);
        todos.splice(index, 1);
        setTodos([...todos]);
        // TODO: подумать над этой функцией (делать setTodos или setFiltered)
    }


    const onKeyDown = e => e.key === 'Enter' ? addTodo() : null;


    return (
        <div className="todo">
            <div className="todo__input-wrapper">
                <input type="text" className="todo__input" placeholder="Введите задачу..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={onKeyDown} />
                <div className="todo__button-add" onClick={addTodo} ><BsPlusLg /></div>
            </div>
            <div className="todo__status-menu">
                <div className={'todo__status-button ' + (menuStatus === 'all' ? 'active' : null)} onClick={() => todoFilter('all')}>all</div>
                <div className={'todo__status-button ' + (menuStatus === true ? 'active' : null)} onClick={() => todoFilter(true)}>done</div>
                <div className={'todo__status-button ' + (menuStatus === false ? 'active' : null)} onClick={() => todoFilter(false)}>not done</div>
            </div>
            {filteredTodos.map(todo => {
                return (
                    <TodoItem key={todo.id} todo={todo} toggleStatus={toggleStatus} deleteTodo={deleteTodo} saveTodo={saveTodo} />
                )
            })}

        </div>
    )
}

export default Todo;