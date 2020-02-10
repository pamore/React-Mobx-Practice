import React from "react";
import {getAllByTestId, getByTestId} from "@testing-library/dom";
import {cleanup, render} from "@testing-library/react";
import {TodoListView} from "../../main/MobxTutorial/TodoListView";

describe('TODO List view', () => {

    beforeEach(() => {
        const test_todoList = [{
            task: "task 1",
            completed: false,
            assignee: ""
        }, {
            task: "task 2",
            completed: true,
            assignee: ""
        }];
        const test_Store = {
            todoList: test_todoList,
            report: "Next TODO: task 1. Progress: 1/2"
        };
        render(<TodoListView store={test_Store}/>);
    });

    afterEach(() => {
        cleanup();
    });

    it('check if the todo list is rendered', () => {
        let childrenElements = getByTestId(document.body, "todoListView").children;
        expect(childrenElements.length).toBe(2);
    });

    it('check if the todo header is rendered with progress details', () => {
        let reportString = getByTestId(document.body, "progressHeader");
        expect(reportString.textContent).toBe("Next TODO: task 1. Progress: 1/2");
    });

    it('check if the todo list is rendered with the right tasks checked', () => {
        let childrenElements = getByTestId(document.body, "todoListView").children;
        expect(childrenElements.length).toBe(2);
        let checkBox1 = getAllByTestId(document.body, "todoItem")[0].firstChild;
        expect(checkBox1.checked).toBe(false);
        let checkBox2 = getAllByTestId(document.body, "todoItem")[1].firstChild;
        expect(checkBox2.checked).toBe(true);
    });

});
