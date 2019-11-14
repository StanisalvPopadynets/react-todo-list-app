import React from 'react';
import ToDoList from './ToDoList';
import Input from './Input';
import './App.css';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      todos: [
        {label: 'Task 1', id: 1},
        {label: 'Task 2', id: 2},
        {label: 'Task 3', id: 3},
      ]
    }
  }

  render() {  
    return (
      <div className="App">
        <ToDoList todos={this.state.todos} />
        <Input />
      </div>
    );
  }
  
}

export default App;
