import * as React from "react";
import {observer} from "mobx-react";
import {TodoView} from "./TodoView";

export class TodoListView extends React.Component {
    render() {
        const store = this.props.store;
        return (
            <div>
                {store.report}
                <ul>
                    {store.todoList.map( (todo, idx) => <TodoView todo={todo} key={idx}/>)}
                </ul>
                <button onClick={this.onNewTodo}>New TODO</button>
            </div>);
    }
    onNewTodo = () => {
        this.props.store.addTodo(prompt('Enter new Todo:', 'Test task'))
    }
}

export default observer(TodoListView);