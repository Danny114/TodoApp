import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: "20px",
      borderBottom: "1px #f4f4f4 solid",
      textDecoration: this.props.todo.completed ? "line-through " : "none"
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            checked={completed}
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            <i class="far fa-trash-alt fa-2x" />
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  color: "#a20e0e",
  background: "none",
  border: "none",
  cursor: "pointer",
  float: "right"
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
