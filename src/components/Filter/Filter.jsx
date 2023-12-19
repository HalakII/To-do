import css from './Filter.module.css';
export const FilterTodo = ({ filter, changeOfFilter }) => {
  return (
    <label className={css.FilterLabel}>
      Filter by name
      <input type="text" value={filter} onChange={changeOfFilter} />
    </label>
  );
};
