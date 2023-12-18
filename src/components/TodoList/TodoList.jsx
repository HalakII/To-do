import './TodoList.css';
export const TodoList = ({ todos, onDeleteTodo }) => (
  <ul>
    {todos.map(({ id, text }) => (
      <li key={id} className="TodoList_item">
        <p className="TodoList_text">{text}</p>
        <button onClick={() => onDeleteTodo(id)} className="TodoList_btn">
          Delete
        </button>
      </li>
    ))}
  </ul>
);
