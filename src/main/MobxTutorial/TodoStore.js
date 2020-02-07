import {autorun, computed, decorate, observable} from "mobx";

export class TodoStore {
    todoList = [];

    constructor() {
        autorun(() => {
            console.log(this.report);
        });
    }
    get completedCount() {
        return this.todoList.filter(
            todo => todo.completed === true
        ).length;
    }

    get report() {
        if (this.todoList.length === 0) {
            return "<none>";
        }
        let nextTodo = this.todoList.find(
            todo => todo.completed === false
        );
        return "Next TODO: "
            + (nextTodo ? nextTodo.task : null)
            + ". "
            + "Progress: " + this.completedCount + "/" + this.todoList.length ;
    }
    addTodo(task){
        this.todoList.push({
            task: task,
            completed: false,
            assignee: ""
        })
    }
}
decorate(TodoStore, {
    todoList: observable,
    completedCount: computed,
    report: computed
});
