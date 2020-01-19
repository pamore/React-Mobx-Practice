import React from "react";

export class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    render() {
        return (
            <button className="square"
                    onClick={() => this.setState({value: this.state.value =='X'? '' : 'X'})}>
                {this.state.value}
            </button>
        );
    }
}