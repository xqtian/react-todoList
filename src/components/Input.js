import React from "react";

const Input = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label htmlFor="listInput">Email address</label>
        <input
          value={props.value}
          onChange={props.onChange}
          type="text"
          className="form-control"
          id="listItemInput"
          placeholder="Add new todo"
        />
        <button className="btn btn-primary">Add Item</button>
      </div>
    </form>
  );
};

export default Input;
