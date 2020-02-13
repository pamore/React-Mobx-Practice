import React from "react";
import {cleanup, fireEvent, render} from "@testing-library/react";
import {Board} from "../../main/TicTacToeGame/Board";
import {getAllByTestId} from "@testing-library/dom";

describe('Board view', () => {

    let squareClickedCount;
    let tempSquares = Array(9).fill(null);
    beforeEach(() => {

        squareClickedCount = 0;
        render(
            <Board
                squares={tempSquares}
                onClickSquare={() => squareClickedCount+=1}
            />
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('should have all nine squares rendered', () => {
        let boardRows = getAllByTestId(document.body, "boardRow");
        expect(boardRows.length).toBe(3);
        expect(boardRows[0].children.length).toBe(3);
        expect(boardRows[1].children.length).toBe(3);
        expect(boardRows[2].children.length).toBe(3);
    });

    it('cshould trigger onClick passed to squares', () => {
        let squareElement = document.body.querySelectorAll(".square");
        fireEvent.click(squareElement[0]);
        fireEvent.click(squareElement[1]);
        fireEvent.click(squareElement[2]);
        expect(squareClickedCount).toBe(3);
    });

});
