import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      item: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };
  handleEdit = (id) => {
    const newItems = this.state.items.filter((item) => {
      return item.id !== id;
    });
    const finditem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: newItems,
      item: finditem.item,
      id: id,
      editItem: true,
    });
  };
  handleDelete = (id) => {
    const newItems = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items: newItems });
  };
  clearList = (e) => {
    this.setState({
      items: [],
    });
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
                items={this.state.items}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
                clearList={this.clearList}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
