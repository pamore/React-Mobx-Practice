import {action, decorate, observable} from "mobx";

export class TicTacToeStore {
    history = [];
    squares = Array(9).fill(null);
    actionsByXIsNext = {
        true: 'X',
        false: 'O'
    };

    constructor() {
        this.history.push({
            squares: this.squares
        });
    }

    addBoardToHistory(squares) {
        this.squares = squares;
        this.history.push(this.squares);
    }

}

decorate(TicTacToeStore, {
    history: observable,
    addBoardToHistory: action
});