import { Component } from 'react';
import { TodoList } from './TodoList/TodoList';
import css from './App.module.css';
import { TodoEditor } from './TodoEditor/TodoEditor';
import { nanoid } from 'nanoid';
import { FilterTodo } from './Filter/Filter';
import { TotalTodos } from './TotalTodos/TotalTodos';

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'React', completed: false },
      { id: 'id-2', text: 'HHTML/CSS', completed: false },
      { id: 'id-3', text: 'JS', completed: false },
      { id: 'id-4', text: 'NodeJS', completed: false },
    ],
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
  };

  deleteTodo = todoId => {
    this.setState(({ todos }) => {
      return { todos: todos.filter(todo => todo.id !== todoId) };
    });
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filterTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  render() {
    const { todos, filter } = this.state;
    const filteredTodos = this.filterTodos();
    const completedTodos = this.calculateCompletedTodos();
    return (
      <div className={css.AppContainer}>
        <TotalTodos todos={todos} completedTodos={completedTodos} />
        <TodoEditor onSubmit={this.addTodo} />
        <FilterTodo filter={filter} changeOfFilter={this.changeFilter} />
        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}
