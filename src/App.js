import React from 'react';
import './App.css';
import {TodoStore} from './TodoStore';

function App() {
  let todoStore = new TodoStore();
  todoStore.addTodo("Task 1");
  todoStore.addTodo("Task 2");
  todoStore.todoList[0].completed = true;
  todoStore.todoList[1].task = "Task 2a";
  todoStore.todoList[0].task = "Task 1a";

  return (
    <div className="App">
      Running...{todoStore.todoList.length}
    </div>
  );
}

export default App;
