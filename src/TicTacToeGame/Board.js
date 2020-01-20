import * as React from "react";
import {Square} from "./Square";
import './Board.css';

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            actionsByXIsNext: {
                true: 'X',
                false: 'O'
            },
            winner : null
        }
    }

    handleClick(i) {
        let tempSquare = this.state.squares.slice();
        if(this.calculateWinner(tempSquare) || tempSquare[i]){
            return;
        }
        tempSquare[i] = this.state.actionsByXIsNext[this.state.xIsNext];
        this.setState({
            xIsNext: !this.state.xIsNext,
            squares: tempSquare
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
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
        const winner = this.calculateWinner(this.state.squares);
        let status = 'Next player: ' + this.state.actionsByXIsNext[this.state.xIsNext];
        if (winner) {
            status = 'Winner: ' + winner;
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}