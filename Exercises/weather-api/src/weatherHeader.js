import React from "react";
import "./App.css";
export class weatherHeader extends React.Component {
  state = {
    cityName: ""
  };
  getValueFromTextBox = e => this.setState({ cityName: e.target.value });
  setValuetoMainFile = e => {
    this.props.setValuetoMainFile(this.state.cityName);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.getValueFromTextBox}
          placeholder="Enter a Location"
        ></input>
        <button onClick={this.setValuetoMainFile}>Find Weather</button>
      </div>
    );
  }
}
export default weatherHeader;
