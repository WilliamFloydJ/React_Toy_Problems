import React, { Component } from "react";

class FilterObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unFilteredArray: [
        { socialStatus: 1, lastName: "Floyd" },
        { occupation: "CowBoy", fullName: "George Grime" },
        { socialStatus: 10, fullName: "Hank Hill" },
        { occupation: "Actor", lastName: "Cruise" },
      ],
      userInput: "",
      filteredArray: [],
    };
  }
  filter = () => {
    this.setState({
      filteredArray: this.state.unFilteredArray.filter((el) => {
        return this.state.userInput in el;
      }),
    });
  };
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText" id="unFilteredSpan">
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          value={this.state.userInput}
          onChange={(event) => this.setState({ userInput: event.target.value })}
        ></input>
        <button className="confirmationButton" onClick={this.filter}></button>
        <span className="resultsBox filterObjectRB" id="filteredSpan">
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
