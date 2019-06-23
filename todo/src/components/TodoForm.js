import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';
import Todo from './Todo';

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
        {this.props.todos.map(todo => (
          <Todo todo={todo} />
        ))}
        {console.log(this.props.todos)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
