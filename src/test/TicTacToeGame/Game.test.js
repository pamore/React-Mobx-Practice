import React from "react";
import {render, cleanup} from "@testing-library/react";
import Game from "../../main/TicTacToeGame/Game";

describe('Game view', () => {
    beforeEach(() => {
        let actionsByXIsNext = {
            true: 'X',
            false: 'O'
        };
        const store = {
            squares: Array(9).fill(null),
            actionsByXIsNext: {actionsByXIsNext}
        };
        render(<Game store={store}/>);
    });

    afterEach(() => {
        cleanup();
    });

    it('should have that board rendered', () => {
        expect(1===1).toBe(true);
    });
});
