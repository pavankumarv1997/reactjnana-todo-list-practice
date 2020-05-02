import React, { Component } from "react";
import Item from "./Todoitem";
export default class Todolist extends Component {
  render() {
    return (
      // lets check vs code and github setup
      <div>
        <h1>this is a list component</h1>
        <Item />
      </div>
    );
  }
}
