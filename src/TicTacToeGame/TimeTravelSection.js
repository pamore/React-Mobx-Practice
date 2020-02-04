import React from "react";

export function TimeTravelSection(props) {
    return (
        <div>
            <button onClick={() => (props.onClickButton(0))}>Restart Game.</button>
        </div>
    );
}