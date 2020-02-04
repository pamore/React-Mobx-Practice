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

    goBackToStep(i) {
        let newHistory = this.history.slice(0, i+1);
        this.history = newHistory;
        this.squares = this.history[this.history.length-1].squares;
        this.movesCompleted = 0;
        this.xIsNext = true;
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