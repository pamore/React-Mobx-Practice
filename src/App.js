import React from 'react';
import './App.css';
import {TodoStore} from './TodoStore';
import {TodoListView} from "./TodoListView";
import {observable} from "mobx";

function App() {
  let todoStore = new TodoStore();
  todoStore.addTodo("Task 1");
  todoStore.addTodo("Task 2");
  todoStore.todoList[0].completed = true;
  todoStore.todoList[1].task = "Task 2a";
  todoStore.todoList[0].task = "Task 1a";

  let peopleStore = observable([
    {name: "Mike"},
    {name: "Bob"}
  ]);

  todoStore.todoList[0].assignee = peopleStore[1].name;
  todoStore.todoList[1].assignee = peopleStore[0].name;

  return (
    <div className="App">
      <TodoListView store={todoStore}/>
    </div>
  );
}

export default App;
