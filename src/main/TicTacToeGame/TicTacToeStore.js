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
        this.history.push({
            squares: this.squares
        });
    }

    recordMoveCompleted() {
        this.movesCompleted += 1;
        this.xIsNext = !this.xIsNext;
    }

    goBackToStep(i) {
        this.history = this.history.slice(0, i + 1);

        this.squares = this.history[this.history.length-1].squares.slice();
        this.movesCompleted = i;
        this.xIsNext = i % 2 === 0;
    }
}

decorate(TicTacToeStore, {
    history: observable,
    squares: observable,
    xIsNext:observable,
    movesCompleted: observable,
    addBoardToHistory: action,
    recordMoveCompleted: action,
    goBackToStep: action

});
