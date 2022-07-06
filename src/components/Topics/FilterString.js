import React, { Component } from "react";
var words = require("an-array-of-english-words");

class FilterString extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unFilteredArray: "Check The English Dictionary",
      userInput: "",
      filteredArray: "",
    };
  }
  filter = () => {
    let filteredString = "";
    let tempFilteredArray = words.filter((el) => {
      return el.includes(this.state.userInput);
    });
    tempFilteredArray.forEach((el) => {
      filteredString += ` ${el}`;
    });
    this.setState({
      filteredArray: filteredString,
    });
  };
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          value={this.state.userInput}
          onChange={(event) => this.setState({ userInput: event.target.value })}
        ></input>
        <button className="confirmationButton" onClick={this.filter}></button>
        <span className="resultsBox filterStringRB">
          {this.state.filteredArray}
        </span>
      </div>
    );
  }
}

export default FilterString;
