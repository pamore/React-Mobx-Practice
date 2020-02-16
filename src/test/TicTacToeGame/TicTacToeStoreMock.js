import {action, decorate, observable} from "mobx";

export class TicTacToeStoreMock {
    historyStub = [];
    squares = Array(9).fill(null);
    xIsNext = true;
    actionsByXIsNext = {
        true: 'X',
        false: 'O'
    };
    movesCompleted = 0;

    constructor() {
        this.historyStub.push({
            squares: this.squares
        });
    }

    addBoardToHistory(squaresStub) {
        this.squares = squaresStub;
        this.historyStub.push({
            squares: this.squares
        });
    }

    recordMoveCompleted() {
        this.movesCompleted += 1;
        this.xIsNext = !this.xIsNext;
    }

    goBackToStep(i) {
        this.historyStub = this.historyStub.slice(0, i + 1);

        this.squares = this.historyStub[this.historyStub.length-1].squares.slice();
        this.movesCompleted = i;
        this.xIsNext = i % 2 === 0;
    }
}

decorate(TicTacToeStoreMock, {
    historyStub: observable,
    squares: observable,
    xIsNext:observable,
    movesCompleted: observable,
    addBoardToHistory: action.bound,
    recordMoveCompleted: action.bound,
    goBackToStep: action.bound
});
