import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
    newTodo: ''
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter todo"
            value={this.state.newTodo}
            onChange={this.handleChanges}
          />
          <button onClick={this.handleSubmit}>Add ToDo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
