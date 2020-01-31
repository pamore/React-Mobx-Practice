import {action, decorate, observable} from "mobx";

export class TicTacToeStore {
    history = [];
    squares = Array(9).fill(null);
    xIsNext = true;
    actionsByXIsNext = {
        true: 'X',
        false: 'O'
    };
    movesCompleted = 0;

    constructor() {
        this.history.push({
            squares: this.squares
        });
    }

    addBoardToHistory(squares) {
        this.squares = squares;
        this.history.push(this.squares);
    }

    recordMoveCompleted() {
        this.movesCompleted += 1;
        this.xIsNext = !this.xIsNext;
    }
}

decorate(TicTacToeStore, {
    history: observable,
    movesRemaining: observable,
    addBoardToHistory: action,
    recordMoveCompleted: action

});