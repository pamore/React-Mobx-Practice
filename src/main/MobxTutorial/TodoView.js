import * as React from "react";
import {observer} from "mobx-react";
import './TodoView.css';

export class TodoView extends React.Component {
    render() {
        const todo = this.props.todo;
        return (
            <li onDoubleClick={this.onRename} data-testid="todoItem">
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={this.onToggleComplete}
                />
                <label className="taskName">{todo.task}</label>
                <label className="taskAssignee">Assigned to: {todo.assignee}</label>
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
