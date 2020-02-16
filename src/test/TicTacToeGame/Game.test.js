import React from "react";
import {cleanup, fireEvent, getAllByTestId, render} from "@testing-library/react";
import Game from "../../main/TicTacToeGame/Game";
import {TicTacToeStoreMock} from "./TicTacToeStoreMock";

describe('Game view', () => {
    let storeMock;
    beforeEach(() => {
        storeMock = new TicTacToeStoreMock();

        render(<Game store={storeMock}/>);
    });

    afterEach(() => {
        cleanup();
    });

    it('should render the board and the status', () => {
        let board = document.body.querySelector(".game-board");
        let status = document.body.querySelector(".game-info").firstChild;

        expect(board).toBeTruthy();
        expect(getAllByTestId(board, "boardRow").length).toBe(3);
        expect(status.textContent).toBe("Next player: X");
    });

    it('should render the updated board and status change when one square is clicked', () => {
        let status = document.body.querySelector(".game-info").firstChild;

        let boardRow1 = getAllByTestId(document.body, "boardRow")[0];
        fireEvent.click(boardRow1.firstElementChild);

        expect(getTextAt(0,0)).toBe('X');
        expect(getTextAt(0,1)).toBe('');
        expect(getTextAt(0,2)).toBe('');
        expect(getTextAt(1,0)).toBe('');
        expect(getTextAt(1,1)).toBe('');
        expect(getTextAt(1,2)).toBe('');
        expect(getTextAt(2,0)).toBe('');
        expect(getTextAt(2,1)).toBe('');
        expect(getTextAt(2,2)).toBe('');

        expect(storeMock.movesCompleted).toBe(1);
        expect(storeMock.xIsNext).toBeFalsy();
        expect(status.textContent).toBe("Next player: O");
    });

    it('should render the winner status when player wins and not allow any moves after winning', () => {
        let status = document.body.querySelector(".game-info").firstChild;

        let boardRow1 = getAllByTestId(document.body, "boardRow")[0];
        let boardRow2 = getAllByTestId(document.body, "boardRow")[1];

        fireEvent.click(boardRow1.children[0]); // move by X is rendered
        fireEvent.click(boardRow2.children[0]); // move by O is rendered
        fireEvent.click(boardRow1.children[1]); // move by X is rendered
        fireEvent.click(boardRow2.children[1]); // move by O is rendered
        fireEvent.click(boardRow1.children[2]); // move by X is rendered
        fireEvent.click(boardRow2.children[2]); // move by O is not rendered

        expect(getTextAt(0,0)).toBe('X');
        expect(getTextAt(0,1)).toBe('X');
        expect(getTextAt(0,2)).toBe('X');
        expect(getTextAt(1,0)).toBe('O');
        expect(getTextAt(1,1)).toBe('O');
        expect(getTextAt(1,2)).toBe('');
        expect(getTextAt(2,0)).toBe('');
        expect(getTextAt(2,1)).toBe('');
        expect(getTextAt(2,2)).toBe('');

        expect(storeMock.movesCompleted).toBe(5);
        expect(storeMock.xIsNext).toBeFalsy();
        expect(status.textContent).toBe("Winner: X");
    });

    it('should render draw status when no one wins and no moves left to play', () => {
        let status = document.body.querySelector(".game-info").firstChild;

        let boardRow1 = getAllByTestId(document.body, "boardRow")[0];
        let boardRow2 = getAllByTestId(document.body, "boardRow")[1];
        let boardRow3 = getAllByTestId(document.body, "boardRow")[2];

        fireEvent.click(boardRow1.children[0]); // move by X is rendered
        fireEvent.click(boardRow2.children[0]); // move by O is rendered
        fireEvent.click(boardRow1.children[1]); // move by X is rendered
        fireEvent.click(boardRow2.children[1]); // move by O is rendered
        fireEvent.click(boardRow2.children[2]); // move by X is rendered
        fireEvent.click(boardRow1.children[2]); // move by O is rendered
        fireEvent.click(boardRow3.children[0]); // move by X is rendered
        fireEvent.click(boardRow3.children[2]); // move by O is rendered
        fireEvent.click(boardRow3.children[1]); // move by X is rendered

        expect(getTextAt(0,0)).toBe('X');
        expect(getTextAt(0,1)).toBe('X');
        expect(getTextAt(0,2)).toBe('O');
        expect(getTextAt(1,0)).toBe('O');
        expect(getTextAt(1,1)).toBe('O');
        expect(getTextAt(1,2)).toBe('X');
        expect(getTextAt(2,0)).toBe('X');
        expect(getTextAt(2,1)).toBe('X');
        expect(getTextAt(2,2)).toBe('O');

        expect(storeMock.movesCompleted).toBe(9);
        expect(storeMock.xIsNext).toBeFalsy();
        expect(status.textContent).toBe("Game Over. Draw.");
    });

    it('should render the board back to Move 2 when time travel button is clicked', () => {
        let status = document.body.querySelector(".game-info").firstChild;

        let boardRow1 = getAllByTestId(document.body, "boardRow")[0];
        let boardRow2 = getAllByTestId(document.body, "boardRow")[1];

        fireEvent.click(boardRow1.children[0]); // move by X is rendered
        fireEvent.click(boardRow2.children[0]); // move by O is rendered
        fireEvent.click(boardRow1.children[1]); // move by X is rendered
        fireEvent.click(boardRow2.children[1]); // move by O is rendered
        fireEvent.click(boardRow1.children[2]); // move by X is rendered
        fireEvent.click(boardRow2.children[2]); // move by O is not rendered

        expect(storeMock.movesCompleted).toBe(5);

        let revertToMove2Button = getAllByTestId(document.body, "timeTravelButton")[2];
        fireEvent.click(revertToMove2Button);

        expect(getTextAt(0,0)).toBe('X');
        expect(getTextAt(0,1)).toBe('');
        expect(getTextAt(0,2)).toBe('');
        expect(getTextAt(1,0)).toBe('O');
        expect(getTextAt(1,1)).toBe('');
        expect(getTextAt(1,2)).toBe('');
        expect(getTextAt(2,0)).toBe('');
        expect(getTextAt(2,1)).toBe('');
        expect(getTextAt(2,2)).toBe('');

        expect(status.textContent).toBe("Next player: X");
    });

    const getTextAt = (row, column) => {
        return getAllByTestId(document.body, "boardRow")[row].children[column].textContent;
    };
});
