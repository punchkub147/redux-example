import React, { Component } from "react";
import { connect } from "react-redux";
import { item } from "../actions";
import axios from "axios";

@connect(state => ({ state }))
export default class extends Component {
  async componentDidMount() {
    this.props.dispatch(item.getAll());
  }
  handleAddItem = () => {
    this.props.dispatch(item.add({ name: this.newName.value }));
    this.newName.value = "";
  };
  render() {
    const { item } = this.props.state;
    return (
      <div>
        <h1>{item.loading ? "LOADING" : ""} Item</h1>
        <form onSubmit={this.handleAddItem}>
          <input type="text" ref={r => (this.newName = r)} />
          <button onSubmit={this.handleAddItem}>ADD</button>
        </form>

        {item.items.map((item, key) => (
          <div key={key}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    );
  }
}
