import React from 'react';
import ToDoList from './ToDoList';
import Input from './Input';
import './App.css';

class App extends React.Component {
  
  idHolder = 3;

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

  onAddItem = (label) => {
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, {label, id: ++this.idHolder}]
      }
    });
  }

  render() {  
    return (
      <div className="App">
        <ToDoList todos={this.state.todos} />
        <Input onAddItem={this.onAddItem} />
      </div>
    );
  }
  
}

export default App;
