import React from 'react'

export default function Todo({todo,toggleTodo}) {
  function handleTodoClick(){
      toggleTodo(todo.id)
  }
  return (
    <div>
      <label>
      {todo.name}
      <input type="checkbox" checked = {todo.complete} onChange={handleTodoClick}></input>
    </label>
    </div>
    
  )
}
