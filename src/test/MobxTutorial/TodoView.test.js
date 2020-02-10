import React from "react";
import {TodoView} from "../../main/MobxTutorial/TodoView";
import {cleanup, fireEvent, render} from '@testing-library/react'
import {getAllByText, getByTestId, getByText} from "@testing-library/dom";

describe('TODO view', () => {

    beforeEach(() => {
        const test_todo = {
            task: "task",
            completed: false,
            assignee: ""
        };
        render(<TodoView todo={test_todo}/>);
    });

    afterEach(() => {
        cleanup();
    });

    it('check if the todo item is rendered', () => {
        let todoItem = getByTestId(document.body, "todoItem");
        expect(todoItem).not.toBeNull();
        expect(getByText(todoItem, "task")).not.toBeNull();
        expect(getAllByText(todoItem, "task").length).toBe(1);
    });

    it('todo item should be checked on click', () => {
        let checkbox = getByTestId(document.body, "todoItem").firstChild;
        expect(checkbox.checked).toBe(false);
        fireEvent.change(checkbox, {target: {checked: true}});
        expect(checkbox.checked).toBe(true);
    });
});
