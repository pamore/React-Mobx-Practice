import React from 'react';
import './App.css';
import {TodoStore} from './MobxTutorial/TodoStore';
import {TodoListView} from "./MobxTutorial/TodoListView";
import {observable} from "mobx";
import Game from "./TicTacToeGame/Game";
import {TicTacToeStore} from "./TicTacToeGame/TicTacToeStore";

function App() {
    let todoStore = new TodoStore();
    let ticTacToeStore = new TicTacToeStore();
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
        <div>
            <div className="App">
                <TodoListView store={todoStore}/>
            </div>
            <div className="Game">
                <Game store={ticTacToeStore}/>
            </div>
        </div>
    );
}

export default App;
