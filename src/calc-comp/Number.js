import React, { Component } from "react";

export default class Number extends Component {
  constructor(props) {
    super(props);

    this.pressNumber = this.pressNumber.bind(this)
  }
  pressNumber(){
      console.log(this.props.number)
  }
  render() {
    return (
      <>
        <button onClick={this.pressNumber}>{this.props.number}</button>
      </>
    );
  }
}
