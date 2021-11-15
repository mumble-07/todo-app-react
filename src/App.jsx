import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList.jsx';
import uuidv4 from 'uuid/dist/v4';

const LOCAL_STORAGE_KEY = 'todoApp.todos'
function App() {
  const [todos, setTodos] = useState([]) // object destructuring... 1st element: todo=> all of todos, 2nd element: setTodos=> a function that'll allow us to update our todos 
  const todoNameRef = useRef()
  
  useEffect(() => {
    const recallStoredTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (recallStoredTodos) setTodos(recallStoredTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete // in this part, naging true na
    setTodos(newTodos)
  }


  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(oldTodos => {
      return [...oldTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todoProps={todos} todoListToggle={toggleTodo} />
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>

    </>
  )
}

export default App;
