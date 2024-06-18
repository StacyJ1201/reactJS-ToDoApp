import React, { Children } from 'react'

export default function ToDoCard(props) {
    const {children, DeleteToDo, editToDo, index} = props
  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            
            <button onClick={() => {
                editToDo(index)
            }}>
                <i className="fa-regular fa-pen-to-square"></i>
            </button>
            
            <button onClick={() => {
                DeleteToDo(index)
            }}>
                <i className="fa-solid fa-trash" ></i>
            </button>

        </div>
    </li>
  )
}
