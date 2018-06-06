import React, { Component } from "react";
import { connect } from "react-redux";

@connect(state => ({ state }))
export default class extends Component {
  async componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <h1>Hello</h1>;
  }
}
