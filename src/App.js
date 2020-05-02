import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "Wake Up" },
      { id: 1, title: "Work Out" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    console.log("Change item");
  };
  handleSubmit = (e) => {
    console.log("Submit");
  };
  handleEdit = (id) => {
    console.log(`Edit ${id}`);
  };
  handleDelete = (id) => {
    console.log(`Delete ${id}`);
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto md-8 mt-5">
              <h3 className="text-center text-capitalize">Todo Input </h3>
              <Todoinput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <Todolist
                item={this.state.items}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
