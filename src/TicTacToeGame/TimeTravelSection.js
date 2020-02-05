import React from "react";

export class TimeTravelSection extends React.Component {

    renderButtons() {
        let buttons = [];
        let i = 0;
        buttons.push(
            this.getButton(0)
        );
        for (i = 1; i < this.props.moves; i++) {
            buttons.push(this.getButton(i));
        }
        return buttons;
    }

    getButton(i) {
        return (
            <li key={i}>
                <button
                    className="timeTravelButton"
                    onClick={() => (this.props.onClickButton(i))}
                >
                    {i === 0 ? "RestartGame" : "Go to move #" + i}
                </button>
            </li>
        );
    }

    render() {
        return (
            <div>
                {this.renderButtons()}
            </div>
        );
    }
}