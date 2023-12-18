import { Component } from 'react';
import { TodoList } from './TodoList/TodoList';

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'React', completed: false },
      { id: 'id-2', text: 'HHTML/CSS', completed: false },
      { id: 'id-3', text: 'JS', completed: false },
      { id: 'id-4', text: 'NodeJS', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => {
      return { todos: prevState.todos.filter(todo => todo.id !== todoId) };
    });
  };

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <p>Total number of tasks: {this.state.todos.length}</p>
          <p>Completed tasks</p>
          <p>Tasks not completed</p>
        </div>
        <TodoList todos={this.state.todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
