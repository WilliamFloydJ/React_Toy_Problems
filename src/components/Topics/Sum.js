import React, { Component } from "react";

class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
  }
  adding = () => {
    this.setState({
      sum: parseInt(this.state.number1) + parseInt(this.state.number2),
    });
  };
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          value={this.state.number1}
          onChange={(event) => this.setState({ number1: event.target.value })}
        ></input>
        <input
          className="inputLine"
          value={this.state.number2}
          onChange={(event) => this.setState({ number2: event.target.value })}
        ></input>
        <button className="confirmationButton" onClick={this.adding}></button>
        <span className="resultsBox">{this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
