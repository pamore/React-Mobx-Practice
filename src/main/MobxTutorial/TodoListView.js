import * as React from "react";
import {observer} from "mobx-react";
import {TodoView} from "./TodoView";

export class TodoListView extends React.Component {
    render() {
        const store = this.props.store;
        return (
            <div>
                <h4 data-testid="progressHeader">{store.report}</h4>
                <ul data-testid="todoListView">
                    {store.todoList.map( (todo, idx) => <TodoView todo={todo} key={idx}/>)}
                </ul>
                <button data-testid="newTodoButton" onClick={this.onNewTodo}>New TODO</button>
            </div>);
    }
    onNewTodo = () => {
        this.props.store.addTodo(window.prompt('Enter new Todo:', 'Test task'))
    }
}

export default observer(TodoListView);
