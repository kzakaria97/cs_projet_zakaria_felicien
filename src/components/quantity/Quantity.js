import React, { Component } from "react";
import "./quantity.css";

export default class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 1,
      show: true,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="btnAdd">
        <button
          onClick={this.DecreaseItem}
          style={{ width: "30px", height: "30px", border: "none" }}
        >
          -
        </button>
        {this.state.show ? <h4>{this.state.clicks}</h4> : ""}
        <button
          onClick={this.IncrementItem}
          style={{ width: "30px", height: "30px", border: "none" }}
        >
          +
        </button>
      </div>
    );
  }
}
