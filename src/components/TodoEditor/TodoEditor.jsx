import { Component } from 'react';
import css from './TodoEditor.module.css';

export class TodoEditor extends Component {
  state = { message: '' };

  handleChange = evt => {
    this.setState({ message: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <form className={css.Todo_editor} onSubmit={this.handleSubmit}>
        <textarea
          className={css.Todo_textarea}
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className={css.Todo_btn}>
          Add
        </button>
      </form>
    );
  }
}
