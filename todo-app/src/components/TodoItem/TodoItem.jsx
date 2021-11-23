import React from "react";
import { FiCircle, FiCheckCircle } from "react-icons/fi";
import { BiEditAlt } from 'react-icons/bi'
import { FaRegTrashAlt } from 'react-icons/fa';
import { AiOutlineSave } from 'react-icons/ai'
import './todoItem.scss';
import { useDispatch } from "react-redux";
import { thunkDeleteTodo, thunkEditTodo, thunkStatusTodo } from "../redux/action/thunkTodoActions";

const TodoItem = ({ todo, ...props }) => {
    const [editTodoValue, setEditTodoValue] = React.useState('');
    const [editStatus, setEditStatus] = React.useState(null);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(thunkDeleteTodo(id))
    }

    const handleStatus = (todo) => {
        dispatch(thunkStatusTodo(todo))
    }

    const handleEdit = (todo) => {
        setEditStatus(todo._id)
        setEditTodoValue(todo.title)
    }

    const handleSaveEdit = (todo) => {
        todo.title = editTodoValue
        setEditStatus(null);
        dispatch(thunkEditTodo(todo));
        setEditTodoValue('');
    }

    return (
        <div className="todo-item">
            <div className="todo-item__main" >
                {todo.status ? <span className="todo-item_done"
                    onClick={() => handleStatus(todo)}><FiCheckCircle /></span>
                    : <span className="todo-item_not-done"
                        onClick={() => handleStatus(todo)}><FiCircle /></span>}
                {editStatus !== todo._id ? <p className={!todo.status ? "todo-item__title" : "todo-item__title todo-item__title_done"}
                    onClick={() => handleStatus(todo)}>
                    {todo.title}
                </p> :
                    <input type="text" className="todo-item__edit" value={editTodoValue} onChange={(e) => setEditTodoValue(e.target.value)} />
                }
            </div>
            <div className="todo-item__actions">
                {editStatus !== todo._id ?
                    <>  <span className="actions__delete" onClick={() => handleDelete(todo._id)}>
                        <FaRegTrashAlt />
                    </span>
                        <span className="actions__edit" onClick={() => handleEdit(todo)}>
                            <BiEditAlt />
                        </span>
                    </>
                    :
                    <span className="actions__save-edit" onClick={() => handleSaveEdit(todo)}>
                        <AiOutlineSave />
                    </span>
                }
            </div>
        </div>
    )
}

export default TodoItem;

