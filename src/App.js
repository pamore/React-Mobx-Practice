import React from 'react';
import './App.css';
import {TodoStore} from './main/MobxTutorial/TodoStore';
import {TodoListView} from "./main/MobxTutorial/TodoListView";
import {observable} from "mobx";
import Game from "./main/TicTacToeGame/Game";
import {TicTacToeStore} from "./main/TicTacToeGame/TicTacToeStore";
import {StateHook} from './main/hooks-practice/StateHook'

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
        <div className="App">
            <div>
                <StateHook></StateHook>
                <br/>
            </div>
            <hr/>
            <div className="todo">
                <h2>TO DO List - </h2>
                <TodoListView store={todoStore}/>
            </div>
            <hr/>
            <div className="Game">
                <h2>Tic Tac Toe Game</h2>
                <Game
                    store={ticTacToeStore}
                />
            </div>
        </div>
    );
}

export default App;
