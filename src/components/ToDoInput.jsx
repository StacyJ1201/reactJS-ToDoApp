import React, { useState } from 'react'

export default function ToDoInput(props) {
    const { AddToTODOList, todovalue, setToDoValue } = props
  return (
    <header>
       <input type="text" value={todovalue} onChange={(event) => {setToDoValue(event.target.value)}} placeholder='Enter what you need to do...' />
       <button onClick={() => {
            AddToTODOList(todovalue)
            setToDoValue('')
        }}>Add</button>
    </header>
  )
}
