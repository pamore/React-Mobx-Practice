import * as React from "react";
import {observer} from "mobx-react";

export class TodoView extends React.Component {
    render() {
        const todo = this.props.todo;
        return (
            <li onDoubleClick={this.onRename}>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={this.onToggleComplete}
                />
                {todo.task}
                <br/>
                Assigned to: {todo.assignee}
            </li>
        );
    }
    onToggleComplete = () => {
        let todo = this.props.todo;
        todo.completed = !todo.completed;
    };

    onRename = () => {
        let todo = this.props.todo;
        todo.task = prompt('Task Name:', todo.task) || todo.task;
    };
}

export default observer(TodoView);