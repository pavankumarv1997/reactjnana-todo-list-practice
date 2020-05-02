import React, { Component } from "react";
import Item from "./Todoitem";
export default class Todolist extends Component {
  render() {
    const { items, handleEdit, handleDelete, clearList } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-center text-capitalize">Todo List</h3>
        {items.map((todoitem) => (
          <Item
            key={todoitem.id}
            title={todoitem.item}
            handleEdit={() => handleEdit(todoitem.id)}
            handleDelete={() => handleDelete(todoitem.id)}
          />
        ))}
        <button
          className="btn btn-block btn-danger text-uppercase mt-5"
          onClick={clearList}
        >
          clear list{" "}
        </button>
      </ul>
    );
  }
}
