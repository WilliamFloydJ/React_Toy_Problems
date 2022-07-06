import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }

  updateSpan = () => {
    const evenArraySpan = document.getElementById("evenArraySpan");
    const oddArraySpan = document.getElementById("oddArraySpan");

    const numArr = this.state.userInput.split(",");

    numArr.forEach((el) => {
      if (el % 2 === 0) {
        this.state.evenArray.push(el);
      } else {
        this.state.oddArray.push(el);
      }
    });

    evenArraySpan.innerHTML = this.state.evenArray;
    oddArraySpan.innerHTML = this.state.oddArray;
  };
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds</h4>
        <input
          className="inputLine"
          value={this.state.userInput}
          onChange={(event) => this.setState({ userInput: event.target.value })}
        ></input>
        <button className="confirmationButton" onClick={this.updateSpan}>
          Submit
        </button>
        <span className="resultsBox" id="evenArraySpan">
          Evens
        </span>
        <span className="resultsBox" id="oddArraySpan">
          Odds
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
