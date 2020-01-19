import * as React from "react";
import {Board} from "./Board";

export class Game extends React.Component{
    render() {
        return (
            <div className="game">
                Tic Tac Toe Game
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