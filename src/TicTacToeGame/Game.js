import * as React from "react";
import {Board} from "./Board";
import './Game.css';

export class Game extends React.Component{
    render() {
        return (
            <div className="game">
                <div className="logo">
                    Tic Tac Toe Game
                </div>
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div></div>
                    <ol></ol>
                </div>
            </div>
        );
    }
}