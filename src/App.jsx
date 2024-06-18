import { useState, useEffect } from "react";
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {

const [todos, setTodos] = useState([])
const [todovalue, setToDoValue] = useState('')

function persistData(newList) {
  localStorage.setItem('todos', JSON.stringify({
    todos: newList
  }))
}

  function AddToTODOList(newToDo) {
    const newToDoList = [...todos, newToDo]
    persistData(newToDoList)
    setTodos(newToDoList)
  }

  function DeleteToDo(index) {
    const newToDoList = todos.filter((todos, todosIndex) => {
      return(todosIndex !== index)
    })
    persistData(newToDoList)
    setTodos(newToDoList)
  }

  function editToDo(index) {
    const valueToeEdited = todos[index]
    setToDoValue(valueToeEdited)
    DeleteToDo(index)
    persistData(newToDoList)
  }

  useEffect(() => {
    if(!localStorage){
      return
    }
    let localToDos=localStorage.getItem('todos')
    if(localToDos){
      localToDos=JSON.parse(localToDos).todos
      setTodos(localToDos)
    }
  }, [])
 
    return (
    <>
      <ToDoInput  todovalue={todovalue} setToDoValue={setToDoValue} AddToTODOList={AddToTODOList}/>
      <ToDoList editToDo={editToDo} DeleteToDo={DeleteToDo} todos={todos}/>
    </>
  )
}

export default App
