import React, { Component } from 'react';

class TodoForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Enter todo" />
          <button onSubmit={this.handleSubmit}>Add ToDo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
