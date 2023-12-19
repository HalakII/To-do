import css from './TotalTodos.module.css';
export const TotalTodos = ({ todos, completedTodos }) => {
  return (
    <div className={css.TodoSummary}>
      <p>Total number of tasks: {todos.length}</p>
      <p>Completed tasks:{completedTodos}</p>
      <p>Tasks not completed: {todos.length - completedTodos}</p>
    </div>
  );
};
