import css from './TodoList.module.css';
export const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={css.TodoList_item}>
        <input
          type="checkbox"
          className={css.TodoList_checkbox}
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className={`${css.TodoList_text} ${completed ? css.completed : ''}`}>
          {text}
        </p>
        <button onClick={() => onDeleteTodo(id)} className={css.TodoList_btn}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
