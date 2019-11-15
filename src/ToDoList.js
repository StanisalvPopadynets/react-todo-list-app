import React from 'react';
import TodoItem from './TodoItem'; 

const ToDoList = (props) => {
  return (
    <ul style={{border: '2px solid red'}}>
      {
        props.todos.map(todo => {
          return <li key={todo.id}>
            <TodoItem label={todo.label} onDelete={() => props.onDelete(todo.id)} />
          </li>
        })
      }
    </ul>
  )
}


export default ToDoList
