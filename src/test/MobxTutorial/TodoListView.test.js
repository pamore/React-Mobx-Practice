import React from "react";
import {getByTestId} from "@testing-library/dom";
import {cleanup, render} from "@testing-library/react";
import {TodoListView} from "../../main/MobxTutorial/TodoListView";

describe('test for a list of TODO view', () => {

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
        const test_Store = {todoList: test_todoList};
        render(<TodoListView store={test_Store}/>);
    });

    afterEach(() => {
        cleanup();
    });

    it('check if the todo list is rendered', () => {
        let childrenElements = getByTestId(document.body, "todoListView").children;
        expect(childrenElements.length).toBe(2);
    });
});
