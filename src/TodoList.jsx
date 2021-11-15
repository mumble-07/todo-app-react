import React from 'react'
import Todo from './Todo'

export default function TodoList( { todoProps, todoListToggle }) {
  return (
    todoProps.map(todoProp => {
      return <Todo key={todoProp.id} todoItem={todoProp} todoToggler={todoListToggle} />
					
			})
  )
}
