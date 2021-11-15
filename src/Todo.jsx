import React from 'react'

export default function Todo({ todoItem, todoToggler }) {
  
  function handleTodoClick() {
    todoToggler(todoItem.id)
  }

  return (
    <div>
      <label>
        <input type='checkbox' checked={todoItem.complete} onChange={handleTodoClick} />
      {todoItem.name}
      </label>
    </div>
  )
}
