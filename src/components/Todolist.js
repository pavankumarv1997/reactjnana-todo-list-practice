import React, { Component } from "react";
import Item from "./Todoitem";
export default class Todolist extends Component {
  render() {
    return (
      <div>
        <h1>this is a list component</h1>

        <Item />
      </div>
    );
  }
}
