import React from "react";
import {cleanup, fireEvent, render} from "@testing-library/react";
import {Square} from "../../main/TicTacToeGame/Square";

describe('Square view', () => {
    let squareClickedCount = 0;
    beforeEach(() => {
        squareClickedCount = 0;
        render(
            <Square
                value='test'
                onClick={() => squareClickedCount+=1}
            />
        );
    });
    afterEach(() => {
        cleanup();
    });
    it('click on square should have value passed', () => {
        let squareElement = document.body.querySelector(".square");
        expect(squareElement.textContent).toBe('test');
    });

    it('click on square should trigger onClick passed', () => {
        let squareElement = document.body.querySelector(".square");
        fireEvent.click(squareElement);
        fireEvent.click(squareElement);
        expect(squareClickedCount).toBe(2);
    });
});
