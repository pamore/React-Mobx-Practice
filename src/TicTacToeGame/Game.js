import * as React from "react";
import {Board} from "./Board";
import './Game.css';
import {observer} from "mobx-react";
import {TicTacToeStore} from "./TicTacToeStore";

export class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true
        }
    }
    handleClick(i) {
        let tempSquare = this.props.store.squares.slice();
        if(this.calculateWinner(tempSquare) || tempSquare[i]){
            return;
        }
        tempSquare[i] = this.props.store.actionsByXIsNext[this.props.store.xIsNext];
        this.setState({
            xIsNext: !this.state.xIsNext
        });
        this.props.store.recordMoveCompleted();
        this.props.store.addBoardToHistory(tempSquare);
    }
    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    render() {
        let current = this.props.store.squares;
        let winner = this.calculateWinner(current);
        let isXNext = this.props.store.xIsNext;
        let status = 'Next player: ' + this.props.store.actionsByXIsNext[isXNext];
        if (winner) {
            status = 'Winner: ' + winner;
        } else if (this.props.store.movesCompleted === 9) {
            status = 'Game Over. Draw.'
        }
        return (
            <div className="game">
                <div className="logo">
                    Tic Tac Toe Game
                </div>
                <div className="game-board">
                    <Board
                        onClickSquare={(i) => this.handleClick(i)}
                        squares={current}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol></ol>
                </div>
            </div>
        );
    }
}

observer(TicTacToeStore);