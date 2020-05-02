import React, { Component } from "react";

export default class Todoinput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group bg-primary text-white text-center p-2">
                <i className="fa fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add item"
              onChange={handleChange}
              value={item}
            />
            <button
              type="submit"
              className={
                editItem
                  ? "btn btn-success btn-block mt-3"
                  : "btn btn-primary btn-block mt-3 "
              }
            >
              {editItem ? "Edit Item" : "Add Item"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
