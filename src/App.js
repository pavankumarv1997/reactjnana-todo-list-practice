import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
export default class App extends Component {
  render() {
    return (
      <>
        <Todoinput />
        <Todolist />
      </>
    );
  }
}
