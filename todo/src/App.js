import React from 'react';
import './App.css';

// Components
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <Todo />
    </div>
  );
}

export default App;
