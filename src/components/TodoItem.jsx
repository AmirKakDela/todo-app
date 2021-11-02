import React, { useState } from "react";
import { FiX, FiCircle, FiCheckCircle } from "react-icons/fi";
import { BiEditAlt } from 'react-icons/bi'
import { BsPlusLg } from 'react-icons/bs';


const TodoItem = ({ todo, ...props }) => {
    const [edit, setEdit] = useState(null)
    const [editValue, setEditValue] = useState('')

    const editHandler = (id, title) => {
        setEdit(id)
        setEditValue(title)
    }

    const saveHandler = () => {
        // TODO: сделать обработчик на Enter
        setEdit(null)
        props.saveTodo(todo.id, editValue)
    }

    return (
        <div className="todo-item">
            <div className="todo-item__text-wrapper">
                <div className="todo-item__done-button" onClick={() => props.toggleStatus(todo.id)}>
                    {todo.status ? <FiCheckCircle /> : <FiCircle />}
                </div>
                {todo.id === edit ? <input autoFocus={true} className="todo-item__text-input" onChange={e => setEditValue(e.target.value)} value={editValue} />
                    : <p className={todo.status ? "todo-item__text  text__done" : "todo-item__text"}>
                        {todo.title}
                    </p>
                }

            </div>
            {todo.id === edit ? <div className="todo-button-save" onClick={saveHandler}><BsPlusLg /></div>
                : <div className="todo-item__button-wrapper">
                    <div className="todo-button-edit" onClick={() => editHandler(todo.id, todo.title)}><BiEditAlt style={{ fontSize: 20 }} /></div>
                    <div className="todo-button-delete" onClick={() => props.deleteTodo(todo.id)}><FiX style={{ fontSize: 20 }} /></div>
                </div>
            }

        </div>
    )
}

export default TodoItem;

