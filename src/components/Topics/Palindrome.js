import React, { Component } from "react";

class Palindrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      palindrome: "",
    };
  }
  isPalindrome = () => {
    const inputReverse = [...this.state.userInput].reverse().join("");
    const palindromeBool = inputReverse === this.state.userInput;
    this.setState({ palindrome: inputReverse + " " + palindromeBool });
  };
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          value={this.state.userInput}
          onChange={(event) => this.setState({ userInput: event.target.value })}
        ></input>
        <button
          className="confirmationButton"
          onClick={this.isPalindrome}
        ></button>
        <span className="resultsBox">{this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
