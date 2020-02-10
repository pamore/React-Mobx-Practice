import React from "react";
import {cleanup, render} from "@testing-library/react";
import {Square} from "../../main/TicTacToeGame/Square";

describe('Square view', () => {
    beforeEach(() => {
        render(<Square />);
    });
    afterEach(() => {
        cleanup();
    });
    it('test example', () => {
        expect(1 === 1).toBe(true);
    });
});
