import React, { Component } from "react";

export default class Todoitem extends Component {
  render() {
    const { title, handleEdit, handleDelete } = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between my-2 text-capitalize">
        {title}
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fa fa-pen"></i>
          </span>

          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
