import React from "react";
import "./todo.scss";
import TodoItem from "../TodoItem/TodoItem";
import TodoInput from "../TodoInput/TodoInput";
import FilterMenu from "../FilterMenu/FilterMenu";
import { useSelector, useDispatch } from "react-redux";
import { thunkGetAllTodos } from "../redux/action/thunkTodoActions";

const Todo = () => {
    const todos = useSelector(state => state.todos.todos);
    const [filterStatus, setFilterStatus] = React.useState('ALL');
    const dispatch = useDispatch();

    React.useEffect(() => {
        console.log('TODO useEffect');
        dispatch(thunkGetAllTodos());
    }, [dispatch])

    const handlerFilterChange = (status) => {
        setFilterStatus(status)
    }

    const handlerFilterTodos = () => {
        switch (filterStatus) {
            case 'ALL':
                return todos
            case 'DONE':
                return [...todos].filter(t => t.status)
            case 'NOT_DONE':
                return [...todos].filter(t => !t.status)
            default:
                return todos
        }
    }

    return (
        <div className="todo">
            <div className="todo__header">
                <TodoInput />
            </div>
            <div className="todo__body">
                <FilterMenu filterStatus={filterStatus} handlerFilterChange={handlerFilterChange} />
                <div className="todo__item">
                    {todos && handlerFilterTodos().map(t => <TodoItem key={t._id} todo={t} />)}
                </div>
            </div>
        </div >
    )
}

export default Todo;


