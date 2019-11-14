import React, { Component } from 'react';
import TodoItem from './TodoItem'; 

export class ToDoList extends Component {

  render() {
    return (
      <ul style={{border: '2px solid red'}}>
        {
          this.props.todos.map(todo => {
            return <li key={todo.id}>
              <TodoItem label={todo.label} />
            </li>
          })
        }
      </ul>
    )
  }
}

export default ToDoList
