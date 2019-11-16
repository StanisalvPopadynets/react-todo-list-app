import React from 'react';
import TodoItem from './TodoItem'; 
import styles from './ToDoList.module.css';

const ToDoList = (props) => {
  return (
    <ul className={styles.list}>
      {
        props.todos.map(todo => {
          return <li className={styles.item} key={todo.id}>
            <TodoItem label={todo.label} onDelete={() => props.onDelete(todo.id)} />
          </li>
        })
      }
    </ul>
  )
}


export default ToDoList
